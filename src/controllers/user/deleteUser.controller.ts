import { FastifyRequest, FastifyReply } from 'fastify';

export async function deleteUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {

	const {username, password} = request.body as {username: string, password: string};
	try {
		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error" });
		}
		const stmt = db.prepare('SELECT * FROM userTable WHERE username = ? AND password = ?');
		const user = stmt.get(username, password);
		if (user) {
			if (user.status == 1) {

				const stmt = db.prepare("DELETE FROM userTable WHERE username = ? AND password = ?");
				const result = stmt.run(username, password);
				return reply.send({ message: `User successfully deleted: ${username}` });
			}
			else
				return reply.send({ error: "user status = not logged in" });
		}
		else
			reply.send({ error: "Invalid credentials / non-existent user" });
	}
	catch (err) {
		console.log(err);
		return reply.send({ error: "User deletion failed" });
	}
};

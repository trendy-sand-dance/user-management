import { FastifyRequest, FastifyReply } from 'fastify';

export async function login(request: FastifyRequest, reply: FastifyReply): Promise<void> {

	const {username, password} = request.body as {username: string, password: string};
	try {
		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error"});
		}
		const stmt = db.prepare('SELECT * FROM userTable WHERE username = ? AND password = ?');
		const user = stmt.get(username, password);
		if (user)  {
			const stmt1 = db.prepare("UPDATE userTable SET status = ? WHERE username = ? AND password = ?");
			const result = stmt1.run(1, username, password);
			reply.send({ message: `User logged in successfully: ${username}`});
		}
		else
			reply.send({ error: "Invalid credentials" });
	}
	catch (err) {
		console.log(err);
		return reply.send({ error: "login page"});
	}
};

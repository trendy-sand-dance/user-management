import { FastifyRequest, FastifyReply } from 'fastify';

export async function registerUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {

	const { username, password, email } = request.body as { username: string, password: string, email: string };
	try {
		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error" });
		}

		const stmt = db.prepare("INSERT INTO userTable (username, password, email, status) VALUES (?, ?, ?, ?)");
		const result = stmt.run(username, password, email, 0);
		return reply.send({ message: `New user added: ${username}`, id: result.lastInsertRowid });
		// remove id for client, only dev/backend
	}
	catch (err) {
		console.log(err);
		return reply.send({ error: "Registration failed" });
	}
};

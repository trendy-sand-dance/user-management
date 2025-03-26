import { FastifyRequest, FastifyReply } from 'fastify';

export async function logout(request: FastifyRequest, reply: FastifyReply): Promise<void> {

	const { username, password} = request.body as { username: string, password: string };
	const db = request.server.db;
	if (!db)
		return reply.send({ error: "Database connection error" });

	const stmt = db.prepare('SELECT * FROM userTable WHERE username = ? AND password = ?');
	const user = stmt.get(username, password);
	if (user) {
		const stmt = db.prepare("UPDATE userTable SET status = ? WHERE username = ? AND password = ?");
		const result = stmt.run(0, username, password);
		return reply.send({ message: `${username} logged out` });
	}
	// return to profile? this shouldnt fail
	return reply.send({ error: `logging out failed..` });
};

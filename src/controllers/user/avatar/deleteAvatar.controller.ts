import { FastifyRequest, FastifyReply } from 'fastify';

export async function deleteAvatar(request: FastifyRequest, reply: FastifyReply): Promise<void> {

	const { username, password} = request.body as { username: string, password: string };
	const db = request.server.db;
	if (!db)
		return reply.send({ error: "Database connection error" });

	const stmt = db.prepare('SELECT * FROM userTable WHERE username = ? AND password = ?');
	const user = stmt.get(username, password);
	if (user)
	{
		const stmt = db.prepare("UPDATE userTable SET avatar = ? WHERE username = ? AND password = ?");
		const result = stmt.run(null, username, password);
		return reply.send({ message: `${username} has deleted their avatar!` });
	}
	return reply.send({ error: `deleting avatar for ${username} failed` });
};

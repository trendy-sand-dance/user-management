import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const dash = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	try {
		const { username } = request.params as { username: string };
		
		const res = await fetch(`${DATABASE_URL}/dashboard/${username}`);
		if (!res.ok) {
			throw res.status;
		}
		return await res.json();
	} catch(error) {
		console.error(error);
		return reply.code(500).send({ error: 'Failed to create new user' });
	}
};

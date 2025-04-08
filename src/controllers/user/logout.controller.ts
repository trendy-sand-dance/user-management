import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const logout = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {

	try {
		const { username } = request.params as { username: string };
		const res = await fetch(`${DATABASE_URL}/logout/${username}`);
	
		reply.code(200);
	} catch (error) {
		return reply.code(500).send({ error: 'Failed to logout' });
	}
};
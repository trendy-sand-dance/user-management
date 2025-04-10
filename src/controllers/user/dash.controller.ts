import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const dash = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	try {
		const { username } = request.params as { username: string };
		
		const res = await fetch(`${DATABASE_URL}/dashboard/${username}`);
		if (!res.ok) {
			const responseBody = await res.json() as { error: string };
			throw { code: res.status, message: responseBody.error };
		}
		return await res.json();
	} catch (error) {
		console.error(error);
		const err = error as { code: number, message: string };
		return reply.code(err.code).send({ error: err.message });
	}
};

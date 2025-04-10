import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const wins = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	try {
		const { username } = request.params as { username: string };
		
		const res = await fetch(`${DATABASE_URL}/wins/${username}`);
		if (!res.ok) {
			const responseBody = await res.json() as { error: string };
			throw { code: res.status, message: responseBody.error };
		}
		const responseBody = await res.json() as { message: number };
		return ({ code: res.status, message: responseBody.message });
	} catch (error) {
		console.error(error);
		const err = error as { code: number, message: string };
		return reply.code(err.code).send({ error: err.message });
	}
};

export const losses = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	try {
		const { username } = request.params as { username: string };
		
		const res = await fetch(`${DATABASE_URL}/losses/${username}`);
		if (!res.ok) {
			const responseBody = await res.json() as { error: string };
			throw { code: res.status, message: responseBody.error };
		}
		const responseBody = await res.json() as { message: number };
		return ({ code: res.status, message: responseBody.message });
	} catch (error) {
		console.error(error);
		const err = error as { code: number, message: string };
		return reply.code(err.code).send({ error: err.message });
	}
};

import { FastifyRequest, FastifyReply } from 'fastify';
const DATABASE_URL = 'http://database_container:3000';

export const editAvatar = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	try {
		const { username } = request.params as { username: string };

		const contentType = request.headers['content-type'];
		if (!contentType)
			throw { code: 400, message: "Bad request, content-type" };
		
		const res = await fetch(`${DATABASE_URL}/editAvatar/${username}`, {
			method: 'POST',
			headers: {
				'content-type': contentType,
			},
			duplex: 'half',
			body: request.raw,
		});
		if (!res.ok) {
			const responseBody = await res.json() as { error: string };
			throw { code: res.status, message: responseBody.error };
		}
		return ({ code: res.status });
	} catch (error) {
		console.error(error);
		const err = error as { code: number, message: string };
		return reply.code(err.code).send({ error: err.message });
	}
};

export const deleteAvatar = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	try {
		const { username } = request.params as { username: string };

		const res = await fetch(`${DATABASE_URL}/deleteAvatar/${username}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
		});
		if (!res.ok) {
			const responseBody = await res.json() as { error: string };
			throw { code: res.status, message: responseBody.error };
		}
		return ({ code: res.status });
	} catch (error) {
		console.error(error);
		const err = error as { code: number, message: string };
		return reply.code(err.code).send({ error: err.message });
	}
};

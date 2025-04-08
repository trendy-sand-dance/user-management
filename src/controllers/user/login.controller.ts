import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const login = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {

	const { username, password } = request.body as { username: string, password: string };
	try {
		const res = await fetch(`${DATABASE_URL}/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password }),
		});
		if (!res.ok) {
			throw res.status;
		}
		return res.status;
	} catch (error) {
		const errStatus = error as number;
		return reply.code(errStatus).send({ error: 'Failed to log user in' }); 
	}

};
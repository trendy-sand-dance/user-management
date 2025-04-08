import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const register = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	try {
		const { username, password, email } = request.body as { username: string, password: string, email: string};
		
		const res = await fetch(`${DATABASE_URL}/register`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password, email }),
		});
		if (!res.ok) {
			throw res.status;
		}
		return res.status;
	} catch(error) {
		console.error(error);
		const errStatus = error as number;
		return reply.code(errStatus).send({ error: 'Failed to register new user' }); 
	}
};

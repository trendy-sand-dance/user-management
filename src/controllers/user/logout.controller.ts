import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const logout = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {

	const { username } = request.body as { username: string };
	
	const res = await fetch(`${DATABASE_URL}/logout`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username }),
	});
	if (!res.ok) {
		const errorText = await res.text();
		throw new Error(`Failed to log user out: ${res.status} ${errorText}`);
	}

	return await res.json();
};
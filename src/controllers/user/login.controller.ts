import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const login = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {

	const { username, password } = request.body as { username: string, password: string };
	
	const res = await fetch(`${DATABASE_URL}/login`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password }),
	});
	if (!res.ok) {
		const errorText = await res.text();
		throw new Error(`Failed to log user in: ${res.status} ${errorText}`);
	}

	return await res.json();
};
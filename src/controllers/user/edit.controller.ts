import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const editUsername = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {

	const { username, password } = request.body as { username: string, password: string };
	
	const res = await fetch(`${DATABASE_URL}/editUsername`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password }),
	});
	if (!res.ok) {
		const errorText = await res.text();
		throw new Error(`Failed to edit user: ${res.status} ${errorText}`);
	}
	return await res.json();
};

export const editPassword = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {

	const { username, password } = request.body as { username: string, password: string };
	
	const res = await fetch(`${DATABASE_URL}/editPassword`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password }),
	});
	if (!res.ok) {
		const errorText = await res.text();
		throw new Error(`Failed to edit user: ${res.status} ${errorText}`);
	}
	return await res.json();
};
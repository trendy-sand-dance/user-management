import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const dash = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {

	const { username } = request.params as { username: string };
	
	const res = await fetch(`${DATABASE_URL}/dashboard/${username}`);
	if (!res.ok) {
		const errorText = await res.text();
		throw new Error(`Failed to load user dashboard: ${res.status} ${errorText}`);
	}
	return await res.json();
};


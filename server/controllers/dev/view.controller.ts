import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const viewDB = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	const res = await fetch(`${DATABASE_URL}/viewDB`);
	if (!res.ok) {
		throw new Error(`Failed to fetch db users: ${res.statusText}`);
	}
	return await res.json();
};

export const viewID = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	const { id } = request.query as { id: string };

	const res = await fetch(`${DATABASE_URL}/viewID/${id}`);
	if (!res.ok) {
	throw new Error(`Failed to fetch user with id ${id}: ${res.statusText}`);
	}
	return await res.json();
};

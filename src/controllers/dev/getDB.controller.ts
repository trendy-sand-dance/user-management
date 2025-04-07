import { FastifyRequest, FastifyReply } from 'fastify';
const DATABASE_URL = process.env.DATABASE_URL || 'http://database_container:3000';

export const getDB = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	const { id } = request.query as { id: string };
	console.log("We made it: )")
	const res = await fetch(`${DATABASE_URL}/users/${id}`);
	if (!res.ok) {
	  throw new Error(`Failed to fetch user with id ${id}: ${res.statusText}`);
	}
	return await res.json();
  };
  

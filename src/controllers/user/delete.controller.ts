import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const deleteUser = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	try {
		const { username } = request.params as { username: string };

		const res = await fetch(`${DATABASE_URL}/delete/${username}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username }),
		});
		if (!res.ok) {
			throw res.status;
		}
		return res.status;
	} catch(error) {
		console.error(error);
		const errStatus = error as number;
		return reply.code(errStatus).send({ error: 'Failed to delete user' }); 
	}
};

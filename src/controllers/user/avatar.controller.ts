import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const editAvatar = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	try {
		const { username } = request.params as { username: string };
		const { newAvatar } = request.body as { newAvatar: string };

		const res = await fetch(`${DATABASE_URL}/editAvatar/${username}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ newAvatar }),
		});
		if (!res.ok) {
			throw res.status;
		}
		return res.status;
	} catch(error) {
		console.error(error);
		const errStatus = error as number;
		return reply.code(errStatus).send({ error: 'Failed to edit avatar' }); 
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
			throw res.status;
		}
		return res.status;
	} catch(error) {
		console.error(error);
		const errStatus = error as number;
		return reply.code(errStatus).send({ error: 'Failed to delete avatar' }); 
	}
};

import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const editUsername = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	try {
		const { username } = request.params as { username: string };
		const { newUsername } = request.body as { newUsername: string };

		const res = await fetch(`${DATABASE_URL}/editUsername/${username}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ newUsername }),
		});
		if (!res.ok) {
			throw res.status;
		}
		return res.status;
	} catch(error) {
		console.error(error);
		const errStatus = error as number;
		return reply.code(errStatus).send({ error: 'Failed to edit username' }); 
	}
};

export const editPassword = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	try {
		const { username } = request.params as { username: string };
		const { newPassword } = request.body as { newPassword: string };

		const res = await fetch(`${DATABASE_URL}/editPassword/${username}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ newPassword }),
		});
		if (!res.ok) {
			throw res.status;
		}
		return res.status;
	} catch(error) {
		console.error(error);
		const errStatus = error as number;
		return reply.code(errStatus).send({ error: 'Failed to edit password' }); 
	}
};

export const editEmail = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	try {
		const { username } = request.params as { username: string };
		const { newEmail } = request.body as { newEmail: string };

		const res = await fetch(`${DATABASE_URL}/editEmail/${username}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ newEmail }),
		});
		if (!res.ok) {
			throw res.status;
		}
		return res.status;
	} catch(error) {
		console.error(error);
		const errStatus = error as number;
		return reply.code(errStatus).send({ error: 'Failed to edit email' }); 
	}
};

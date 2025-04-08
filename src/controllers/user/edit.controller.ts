import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const editUsername = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {

	const { username } = request.params as { username: string };
	try {

		const res = await fetch(`${DATABASE_URL}/editUsername/${username}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username }),
		});
		if (!res.ok) {
			throw res.status;
		}
		return res.status;
	} catch(error) {
		const errStatus = error as number;
		return reply.code(errStatus).send({ error: 'Failed to edit username' }); 
	}

};

//export const editPassword = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {

//	const { username, password } = request.params as { username: string, password: string };
	
//	const res = await fetch(`${DATABASE_URL}/editPassword/${username}+${password}`, {
//		method: 'POST',
//		headers: { 'Content-Type': 'application/json' },
//		body: JSON.stringify({ username, password }),
//	});
//	if (!res.ok) {
//		const errorText = await res.text();
//		throw new Error(`Failed to edit user: ${res.status} ${errorText}`);
//	}
//	return await res.json();
//};


// edit email
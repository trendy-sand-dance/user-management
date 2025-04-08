import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const login = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {

	const { username, password } = request.body as { username: string, password: string };
	//console.log(`username: ${username}, password: ${password}`);

	const res = await fetch(`${DATABASE_URL}/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password }),
	});
	if (!res.ok) {
		const errorText = await res.text();
		throw new Error(`Failed to log user in: ${res.status} ${errorText}`);
	}
	//console.log("Logging res.json:", res.body);
	//const jsonBlob = await res.json();
	//const resText = await res.text();
	//console.log("text = ", resText);
	//jsonBlob.user
	//console.log("body - ", res.body);
	//console.log("text - ", res.text);
	return res.status;

	//return reply.code(res.status).send(jsonBlob);
	//message: string, error: string, statusCode: number, email: string, avatar: string 
	//return 

	//console.log("blob user = ", jsonBlob.user);
	//return reply.code(200).send(res);
};
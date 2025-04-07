import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const register = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	
	const { username, password, email } = request.body as { username: string, password: string, email: string};
	const res = await fetch(`${DATABASE_URL}/register`, {
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
	  body: JSON.stringify({ username, password, email }),
	});
  
	if (!res.ok) {
	  const errorText = await res.text();
	  throw new Error(`Failed to create user: ${res.status} ${errorText}`);
	}

	return await res.json();
  };


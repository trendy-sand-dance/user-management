import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'http://database_container:3000';

export const addAvatar = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	
	const { username, avatar } = request.params as { username: string, avatar: string};
	const res = await fetch(`${DATABASE_URL}/addAvatar/${username}`, {
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
	  body: JSON.stringify({ username, avatar }),
	});
  
	if (!res.ok) {
	  const errorText = await res.text();
	  throw new Error(`Failed to add avatar: ${res.status} ${errorText}`);
	}

	return await res.json();
  };


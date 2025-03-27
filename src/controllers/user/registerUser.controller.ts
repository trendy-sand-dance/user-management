import { FastifyRequest, FastifyReply } from 'fastify';

export async function registerUser(request: FastifyRequest, reply: FastifyReply): Promise<void> {

  const { username, password, email } = request.body as { username: string, password: string, email: string };
  try {
    const response = await fetch('http://database-service:80/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email })
    });
    const responseData = await response.json() as { message: string, id: number };
    return reply.send(responseData);
  }
  catch (err) {
    console.log(err);
    return reply.send({ error: "Registration failed" });
  }
  return reply.send({ message: "registerUser endpoint" });
};

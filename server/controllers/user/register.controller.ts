import { FastifyRequest, FastifyReply } from 'fastify';

const DATABASE_URL = 'https://database_container:3000';

export const register = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
  try {
    const { username, password, email } = request.body as { username: string, password: string, email: string };

    const res = await fetch(`${DATABASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email }),
    });
    if (!res.ok) {
      const responseBody = await res.json() as { error: string };
      throw { code: res.status, message: responseBody.error };
    }
    return ({ code: res.status });
  } catch (error) {
    console.error(error);
    const err = error as { code: number, message: string };
    return reply.code(err.code).send({ error: err.message });
  }
};

export const login_old = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
  try {
    const { username, password } = request.body as { username: string, password: string };

    const res = await fetch(`${DATABASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) {
      const responseBody = await res.json() as { error: string };
      throw { code: res.status, message: responseBody.error };
    }
    return ({ code: res.status });
  } catch (error) {
    console.error(error);
    const err = error as { code: number, message: string };
    return reply.code(err.code).send({ error: err.message });
  }
};

interface User {
  id: number,
  username: string,
  password: string,
  email: string,
  avatar: string,
  status: boolean,
  player: Player
}


interface Player {
  id: number,
  userId: number,
  x: number,
  y: number,
}

export const login = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
  try {
    const { username, password } = request.body as { username: string, password: string };

    const res = await fetch(`${DATABASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) {
      const responseBody = await res.json() as { error: string };
      throw { code: res.status, message: responseBody.error };
    }
    // const user = await res.json() as { user: User, player: Player };
    const user = await res.json() as { user: User, player: Player };
    console.log("USER IN USER MANAGEMENT: ", user);
    console.log(".Player?: ", user.player);
    return reply.code(200).send(user);
  } catch (error) {
    console.error(error);
    const err = error as { code: number, message: string };
    return reply.code(err.code).send({ error: err.message });
  }
};


export const logout = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
  try {
    const { username } = request.params as { username: string };

    const res = await fetch(`${DATABASE_URL}/logout/${username}`);
    if (!res.ok) {
      const responseBody = await res.json() as { error: string };
      throw { code: res.status, message: responseBody.error };
    }
    return ({ code: res.status });
  } catch (error) {
    console.error(error);
    const err = error as { code: number, message: string };
    return reply.code(err.code).send({ error: err.message });
  }
};

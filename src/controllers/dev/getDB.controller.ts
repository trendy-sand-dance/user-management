//import { FastifyRequest, FastifyReply } from 'fastify';

//export async function getDB(request: FastifyRequest, reply: FastifyReply): Promise<void> {

//	const db = request.server.db;
//	if (!db)
//		return reply.send({ error: "Database connection error" });

//	const query = `SELECT * FROM userTable`;
//	const userTable = db.prepare(query).all();
//	return reply.send({ title: "Home", userTable });

//};

//import { FastifyRequest, FastifyReply } from 'fastify';
const DATABASE_URL = process.env.DATABASE_URL || 'http://database_container:3000';

export const getDB = async (id: number) => {
	const res = await fetch(`${DATABASE_URL}/users/${id}`);
	if (!res.ok) {
	  throw new Error(`Failed to fetch user with id ${id}: ${res.statusText}`);
	}
	return await res.json();
  };
  
  export const createUser = async (username: string, email: string) => {
	const res = await fetch(`${DATABASE_URL}/users`, {
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
	  body: JSON.stringify({ username, email }),
	});
  
	if (!res.ok) {
	  const errorText = await res.text();
	  throw new Error(`Failed to create user: ${res.status} ${errorText}`);
	}
  
	return await res.json();
  };

//export async function getDB(request: FastifyRequest, reply: FastifyReply): Promise<void> {
//    try {
//        const users = await prisma.user.findMany();
//        reply.send(users);
//    } catch (error) {
//        reply.status(500).send({ error: 'Failed to fetch users' });
//    }
//};
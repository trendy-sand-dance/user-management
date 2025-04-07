import { FastifyRequest, FastifyReply } from 'fastify';

//export async function addDev(request: FastifyRequest, reply: FastifyReply): Promise<void> {

//  //const username = "<username>";
//  //const password = "<password>";
//  //const email = "<email>";
//  const username = "<username>";
//  const password = "<password>";
//  const email = "<email>";
//  try {
//    const db = request.server.db;
//    if (!db) {
//      console.error("Database is not initialized");
//      return reply.send({ error: "Database connection error" });
//    }

//    const stmt = db.prepare("INSERT INTO userTable (username, password, email, status) VALUES (?, ?, ?, ?)");
//    const result = stmt.run(username, password, email, 0);
//    return reply.send({ message: `New user added: ${username}`, id: result.lastInsertRowid });
//  }
//  catch (err) {
//    console.log(err);
//    return reply.send({ error: "Registration failed" });
//  }
//};

const DATABASE_URL = process.env.DATABASE_URL || 'http://database_container:3000';

export const registerUser = async (request: FastifyRequest, reply: FastifyReply): Promise<any> => {
	
	const { username, password, email } = request.body as { username: string, password: string, email: string};
	const avatar = "something";
	const res = await fetch(`${DATABASE_URL}/register`, {
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
	  body: JSON.stringify({ username, password, email, avatar }),
	});
  
	if (!res.ok) {
	  const errorText = await res.text();
	  throw new Error(`Failed to create user: ${res.status} ${errorText}`);
	}
  
	return await res.json();
  };

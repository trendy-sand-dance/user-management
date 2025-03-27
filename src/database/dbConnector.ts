//import databasePlugin from 'fastify-plugin';
//import Database from 'better-sqlite3';
//import fs from 'fs';
//import { FastifyInstance } from 'fastify';

//export default databasePlugin(async (fastify: FastifyInstance) => {
//	  const dbPath = '/app/src/database/database.db';

//  if (!fs.existsSync(dbPath)) {
//    throw new Error(`Database not found at ${dbPath}. Ensure it is created by the 'database' service.`);
//  }

//  const db = new Database(dbPath, { verbose: console.log });

//  fastify.decorate('sqlite', {
//	    query: (sql: string) => db.prepare(sql).all()
//	});
//});

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import dbOperations from 'https://github.com/trendy-sand-dance/database/src/database/dbOperations.ts';

interface User {
	id: number;
	username: string;
	password: string;
	email: string;
	avatar: string | null;
	status: boolean;
}

export default async function(fastify: FastifyInstance): Promise<void> {
	fastify.get('/users', async (request: FastifyRequest, reply: FastifyReply) => {
		const users: User[] = dbOperations.query('SELECT id, username, password, email, avatar, status FROM userTable');
		reply.send(users);
	});

	// other routes
}

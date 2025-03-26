import databasePlugin from 'fastify-plugin';
import Database from 'better-sqlite3';
import fs from 'fs';
import { FastifyInstance } from 'fastify';

export default databasePlugin(async (fastify: FastifyInstance) => {
	  const dbPath = '/app/src/database/database.db';

  if (!fs.existsSync(dbPath)) {
    throw new Error(`Database not found at ${dbPath}. Ensure it is created by the 'database' service.`);
  }

  const db = new Database(dbPath, { verbose: console.log });

  fastify.decorate('sqlite', {
	    query: (sql: string) => db.prepare(sql).all()
	});
});

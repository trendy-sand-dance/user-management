import Database from "better-sqlite3";

declare module "fastify" {
	interface FastifyInstance {
		db: Database.Database;
	}
	interface FastifyRequest {
		server: FastifyInstance;
	  }
};
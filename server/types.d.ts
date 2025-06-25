import Database from "better-sqlite3";

declare module "fastify" {
	interface FastifyRequest {
		server: FastifyInstance;
	  }
};
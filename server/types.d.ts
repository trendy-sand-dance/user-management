import Database from "better-sqlite3";

declare module "fastify" {
	//interface FastifyInstance {

	//}
	interface FastifyRequest {
		server: FastifyInstance;
	  }
};
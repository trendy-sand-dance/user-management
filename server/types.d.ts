import Database from "better-sqlite3";
import { JWT } from '@fastify/jwt'

declare module "fastify" {
	interface FastifyRequest {
		server: FastifyInstance;
    jwt: JWT
	  }
};


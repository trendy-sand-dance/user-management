//import { FastifyRequest, FastifyReply } from 'fastify';

//export async function getDB(request: FastifyRequest, reply: FastifyReply): Promise<void> {

//	const db = request.server.db;
//	if (!db)
//		return reply.send({ error: "Database connection error" });

//	const query = `SELECT * FROM userTable`;
//	const userTable = db.prepare(query).all();
//	return reply.send({ title: "Home", userTable });

//};

import { FastifyRequest, FastifyReply } from 'fastify';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getDB(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
        const users = await prisma.user.findMany();
        reply.send(users);
    } catch (error) {
        reply.status(500).send({ error: 'Failed to fetch users' });
    }
};
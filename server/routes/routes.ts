import { FastifyInstance } from 'fastify';

	// dev
	import {getHome} from "../controllers/dev/getHome.controller";
	import {viewDB} from "../controllers/dev/viewDB.controller";
	import {viewID} from "../controllers/dev/viewID.controller";
	
	// web
	import {dash} from "../controllers/web/dash.controller";

	// user controllers
	import {register} from "../controllers/user/register.controller";
	import {login} from "../controllers/user/login.controller";
	import {logout} from "../controllers/user/logout.controller";
	import {editUsername} from "../controllers/user/edit.controller";
	import {editPassword} from "../controllers/user/edit.controller";
	import {editEmail} from "../controllers/user/edit.controller";
	import {deleteUser} from "../controllers/user/delete.controller";
	import {editAvatar} from "../controllers/user/avatar.controller";
	import {deleteAvatar} from "../controllers/user/avatar.controller";


async function routes(fastify: FastifyInstance) {

	// dev
	fastify.get('/', getHome);
	fastify.get('/viewDB', viewDB);
	fastify.get('/viewID', viewID);

	//// web
	fastify.get('/dashboard/:username', dash);

	//// user
	fastify.post('/register', register);
	fastify.post('/login', login);
	fastify.get('/logout/:username', logout);
	fastify.post('/editUsername/:username', editUsername);
	fastify.post('/editPassword/:username', editPassword);
	fastify.post('/editEmail/:username', editEmail);
	fastify.delete('/delete/:username', deleteUser);
	fastify.post('/editAvatar/:username', editAvatar);
	fastify.post('/deleteAvatar/:username', deleteAvatar);

};

export default routes;

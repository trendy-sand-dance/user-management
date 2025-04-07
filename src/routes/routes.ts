import { FastifyInstance } from 'fastify';

	// dev
	import {getHome} from "../controllers/dev/getHome.controller";
	import {viewDB} from "../controllers/dev/viewDB.controller";
	import {viewID} from "../controllers/dev/viewID.controller";

	// user controllers
	import {register} from "../controllers/user/register.controller";
	import {login} from "../controllers/user/login.controller";
	import {logout} from "../controllers/user/logout.controller";
	//import {edit} from "../controllers/user/edit.controller";
	//import {delete} from "../controllers/user/delete.controller";


	// avatar controllers
	//import {addAvatar} from "../controllers/user/avatar/addAvatar.controller";
	//import {editAvatar} from "../controllers/user/avatar/editAvatar.controller";
	//import {deleteAvatar} from "../controllers/user/avatar/deleteAvatar.controller";

	//// web
	//import {getDashUser} from "../controllers/web/getDashUser.controller";


async function routes(fastify: FastifyInstance) {

	// dev
	fastify.get('/', getHome);
	fastify.get('/viewDB', viewDB);
	fastify.get('/viewID', viewID);

	//// user
	fastify.post('/register', register);
	fastify.post('/login', login);
	fastify.post('/logout', logout);
	//fastify.post('/edit', edit);
	//fastify.delete('/delete', delete);


	//// avatar
	//fastify.post('/addAvatar', addAvatar);
	//fastify.post('/editAvatar', editAvatar);
	//fastify.delete('/deleteAvatar', deleteAvatar);

	//// web
	//fastify.get('/dash/:username', getDashUser);
};

export default routes;

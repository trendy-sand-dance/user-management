import { FastifyInstance } from 'fastify';

	// dev
	import {getHome} from "../controllers/dev/getHome.controller";
	import {viewDB} from "../controllers/dev/viewDB.controller";
	import {viewID} from "../controllers/dev/viewID.controller";

	// user controllers
	import {dash} from "../controllers/user/dash.controller";
	import {register} from "../controllers/user/register.controller";
	import {login} from "../controllers/user/login.controller";
	import {logout} from "../controllers/user/logout.controller";
	import {editUsername} from "../controllers/user/edit.controller";
	import {editPassword} from "../controllers/user/edit.controller";
	import {editEmail} from "../controllers/user/edit.controller";
	import {deleteUser} from "../controllers/user/delete.controller";
	import {editAvatar} from "../controllers/user/avatar.controller";
	import {deleteAvatar} from "../controllers/user/avatar.controller";

	// friends
	//import {accept} from "../controllers/friends/accept.controller";
	//import {request} from "../controllers/friends/request.controller";
	//import {reject} from "../controllers/friends/reject.controller";
	import {friends} from "../controllers/friends/friends.controller";

	// stats
	//import {matches} from "../controllers/stats/matches.controller";
	import {wins} from "../controllers/stats/stats.controller";
	import {losses} from "../controllers/stats/stats.controller";

async function routes(fastify: FastifyInstance) {

	// dev
	fastify.get('/', getHome);
	fastify.get('/viewDB', viewDB);
	fastify.get('/viewID', viewID);

	// user
	fastify.get('/dashboard/:username', dash);
	fastify.post('/register', register);
	fastify.post('/login', login);
	fastify.get('/logout/:username', logout);
	fastify.post('/editUsername/:username', editUsername);
	fastify.post('/editPassword/:username', editPassword);
	fastify.post('/editEmail/:username', editEmail);
	fastify.delete('/delete/:username', deleteUser);
	fastify.post('/editAvatar/:username', editAvatar);
	fastify.post('/deleteAvatar/:username', deleteAvatar);
	
	// friends
	//fastify.post('/accept', accept);
	//fastify.post('/request', request);
	//fastify.post('/reject', reject);
	fastify.get('/friends/:username', friends);

	// stats
	//fastify.get('/matches', matches);
	fastify.get('/wins/:username', wins);
	fastify.get('/losses/:username', losses);
	// update ... or this in game and only get latest stats on login?
	// same with matches, get latest history, game server handles updating 
		// this info while it changes while user is logged in

};

export default routes;

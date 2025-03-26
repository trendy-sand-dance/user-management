import { FastifyInstance } from 'fastify';

// dev
import {getHome} from "../controllers/dev/getHome.controller";
import {getDB} from "../controllers/dev/getDB.controller";
import {addDev} from "../controllers/dev/addDev.controller";
import {delDev} from "../controllers/dev/delDev.controller";
import {changeStatusDev} from "../controllers/dev/changeStatusDev.controller";
import {editDev} from "../controllers/dev/editDev.controller";

// user
import {registerUser} from "../controllers/user/registerUser.controller";
import {editUser} from "../controllers/user/editUser.controller";
import {login} from "../controllers/user/login.controller";
import {logout} from "../controllers/user/logout.controller";
import {deleteUser} from "../controllers/user/deleteUser.controller";

// avatar
import {addAvatar} from "../controllers/user/avatar/addAvatar.controller";
import {editAvatar} from "../controllers/user/avatar/editAvatar.controller";
import {deleteAvatar} from "../controllers/user/avatar/deleteAvatar.controller";

// web
import {getDashUser} from "../controllers/web/getDashUser.controller";

async function routes(fastify: FastifyInstance) {

	// dev
	fastify.get('/', getHome);
	fastify.get('/DB', getDB);
	fastify.get('/add', addDev);
	fastify.get('/del', delDev);
	fastify.get('/stat', changeStatusDev);
	fastify.get('/eddy', editDev);

	// user
	fastify.post('/register', registerUser);
	fastify.post('/edit', editUser);
	fastify.post('/login', login);
	fastify.post('/logout', logout);
	fastify.delete('/delete', deleteUser);

	// avatar
	fastify.post('/addAvatar', addAvatar);
	fastify.post('/editAvatar', editAvatar);
	fastify.delete('/deleteAvatar', deleteAvatar);

	// web
	fastify.get('/dash/:username', getDashUser);
};

export default routes;

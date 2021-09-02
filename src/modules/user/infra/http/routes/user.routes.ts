import { Router, Request, Response } from 'express';
import { UserController } from '@modules/user/controllers/UserController';
import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

const routesUser = Router();

const userController = new UserController();

routesUser.get('/', userController.show);
routesUser.get('/admin', userController.findAdmins);
routesUser.post('/', userController.create);
routesUser.put('/', ensureAuthenticated, userController.update);


export { routesUser };
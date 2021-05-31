import {Router,Request,Response} from 'express';
import { UserController } from '@modules/user/controllers/UserController';
import { celebrate, Joi, Segments } from 'celebrate';
import ensureAuthenticated from  '@modules/user/infra/http/middleware/ensureAuthenticated';

const routesUser = Router();

const userController = new UserController();

routesUser.get('/',userController.show);
routesUser.post('/',userController.create);


export {routesUser};
import {Router,Request,Response} from 'express';
import {StatusTicketController} from '@modules/ticket/controllers/StatusTicketController'
import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

const routesStatusTicket = Router();
const statusTicketController = new StatusTicketController();

routesStatusTicket.get('/',statusTicketController.show);
routesStatusTicket.patch('/:ticket',ensureAuthenticated,statusTicketController.changeStatus);

export {routesStatusTicket};
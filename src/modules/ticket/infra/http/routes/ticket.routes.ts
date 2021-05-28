import {Router,Request,Response} from 'express';
//import {StatusTicketController} from '@modules/ticket/controllers/StatusTicketController'
import {routesStatusTicket} from '@modules/ticket/infra/http/routes/statusticket.routes';

const routesTicket = Router();
//const statusTicketController = new StatusTicketController();

//routesTicket.get('/',statusTicketController.show);
routesTicket.use('/status',routesStatusTicket);

export {routesTicket};
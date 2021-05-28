import {Router,Request,Response} from 'express';
import {StatusTicketController} from '@modules/ticket/controllers/StatusTicketController'

const routesStatusTicket = Router();
const statusTicketController = new StatusTicketController();

routesStatusTicket.get('/',statusTicketController.show);

export {routesStatusTicket};
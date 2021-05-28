import {Router,Request,Response} from 'express';
import {routesStatusTicket} from '@modules/ticket/infra/http/routes/statusticket.routes';
import {routesCategoryTicket} from '@modules/ticket/infra/http/routes/categoryticket.routes';
import {TicketController} from '@modules/ticket/controllers/TicketController'

const routesTicket = Router();
const ticketController = new TicketController();

routesTicket.get('/',ticketController.show);
routesTicket.use('/status',routesStatusTicket);
routesTicket.use('/category',routesCategoryTicket);

export {routesTicket};
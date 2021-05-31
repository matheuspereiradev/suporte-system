import {Router,Request,Response} from 'express';
import {routesStatusTicket} from '@modules/ticket/infra/http/routes/statusticket.routes';
import {routesCategoryTicket} from '@modules/ticket/infra/http/routes/categoryticket.routes';
import {TicketController} from '@modules/ticket/controllers/TicketController'
import { routesInteractionTicket } from './interactionticket.routes';

const routesTicket = Router();
const ticketController = new TicketController();

routesTicket.get('/',ticketController.show);
routesTicket.get('/find/:id',ticketController.find);
routesTicket.use('/status',routesStatusTicket);
routesTicket.use('/category',routesCategoryTicket);
routesTicket.use('/intaraction',routesInteractionTicket);

export {routesTicket};
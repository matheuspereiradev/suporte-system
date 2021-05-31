import {Router,Request,Response} from 'express';
import {routesStatusTicket} from '@modules/ticket/infra/http/routes/statusticket.routes';
import {routesCategoryTicket} from '@modules/ticket/infra/http/routes/categoryticket.routes';
import {TicketController} from '@modules/ticket/controllers/TicketController'
import { routesInteractionTicket } from './interactionticket.routes';
import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

const routesTicket = Router();
const ticketController = new TicketController();

routesTicket.get('/',ensureAuthenticated,ticketController.show);
routesTicket.get('/find/:id',ensureAuthenticated,ticketController.find);
routesTicket.post('/',ensureAuthenticated,ticketController.create);

routesTicket.use('/status',routesStatusTicket);
routesTicket.use('/category',routesCategoryTicket);
routesTicket.use('/intaraction',routesInteractionTicket);

export {routesTicket};
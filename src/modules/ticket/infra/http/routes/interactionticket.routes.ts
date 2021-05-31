import {Router,Request,Response} from 'express';
import {StatusTicketController} from '@modules/ticket/controllers/StatusTicketController'
import { InteractionController } from '@modules/ticket/controllers/InteractionController';
import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

const routesInteractionTicket = Router();
const interactionTicketController = new InteractionController();

routesInteractionTicket.post('/',ensureAuthenticated,interactionTicketController.create);

export {routesInteractionTicket};
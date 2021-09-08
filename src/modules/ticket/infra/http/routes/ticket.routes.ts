import { Router } from 'express';
import ensureAuthenticated from '../../../../user/infra/http/middleware/ensureAuthenticated';
import { TicketController } from '../../../controllers/TicketController';
import { routesCategoryTicket } from '../../../infra/http/routes/categoryticket.routes';
import { routesStatusTicket } from '../../../infra/http/routes/statusticket.routes';
import { routesInteractionTicket } from './interactionticket.routes';

const routesTicket = Router();
const ticketController = new TicketController();

routesTicket.get('/', ensureAuthenticated, ticketController.show);
routesTicket.get('/find/:id', ensureAuthenticated, ticketController.find);
routesTicket.post('/', ensureAuthenticated, ticketController.create);
routesTicket.delete('/:id', ensureAuthenticated, ticketController.delete);

routesTicket.use('/status', routesStatusTicket);
routesTicket.use('/category', routesCategoryTicket);
routesTicket.use('/intaraction', routesInteractionTicket);

export { routesTicket };

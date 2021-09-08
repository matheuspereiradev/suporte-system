import { StatusTicketController } from '../../../controllers/StatusTicketController';
import ensureAuthenticated from '../../../../user/infra/http/middleware/ensureAuthenticated';
import { Router } from 'express';

const routesStatusTicket = Router();
const statusTicketController = new StatusTicketController();

routesStatusTicket.get('/', statusTicketController.show);
routesStatusTicket.patch('/:ticket', ensureAuthenticated, statusTicketController.changeStatus);

export { routesStatusTicket };

import {Router,Request,Response} from 'express';
import {routesStatusTicket} from '@modules/ticket/infra/http/routes/statusticket.routes';
import {routesCategoryTicket} from '@modules/ticket/infra/http/routes/categoryticket.routes';

const routesTicket = Router();
//const statusTicketController = new StatusTicketController();

//routesTicket.get('/',statusTicketController.show);
routesTicket.use('/status',routesStatusTicket);
routesTicket.use('/category',routesCategoryTicket);

export {routesTicket};
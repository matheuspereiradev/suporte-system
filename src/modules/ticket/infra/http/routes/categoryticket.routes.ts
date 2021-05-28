import {Router,Request,Response} from 'express';
import {CategoryTicketController} from '@modules/ticket/controllers/CategoryTicketController'

const routesCategoryTicket = Router();
const statusCategoryController = new CategoryTicketController();

routesCategoryTicket.get('/',statusCategoryController.show);

export {routesCategoryTicket};
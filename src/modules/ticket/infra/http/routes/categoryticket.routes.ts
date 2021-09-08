import { CategoryTicketController } from '../../../controllers/CategoryTicketController';
import { Router } from 'express';

const routesCategoryTicket = Router();
const statusCategoryController = new CategoryTicketController();

routesCategoryTicket.get('/', statusCategoryController.show);

export { routesCategoryTicket };

import {Router} from 'express';
import { InteractionController } from '@modules/ticket/controllers/InteractionController';
import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';
import configUp from '@config/multer'
import multer from 'multer';

const routesInteractionTicket = Router();
const interactionTicketController = new InteractionController();

const uploadFile = multer(configUp)

routesInteractionTicket.post('/',ensureAuthenticated,uploadFile.single('file'),interactionTicketController.create);
routesInteractionTicket.delete('/:id',ensureAuthenticated,interactionTicketController.delete);

export {routesInteractionTicket};
import { BacklogController } from '../../../controllers/BacklogController';
import ensureAuthenticated from '../../../../user/infra/http/middleware/ensureAuthenticated';
import { Router } from 'express';

const routesBacklog = Router();
const backlogController = new BacklogController();

routesBacklog.get('/', ensureAuthenticated, backlogController.show);
// routesBacklog.get('/find/:id', ensureAuthenticated, BacklogController.find);
routesBacklog.post('/', ensureAuthenticated, backlogController.create);
routesBacklog.put('/:id', ensureAuthenticated, backlogController.update);
routesBacklog.patch('/close/:id', ensureAuthenticated, backlogController.changeOpenedStatus);
routesBacklog.delete('/:id', ensureAuthenticated, backlogController.delete);


export { routesBacklog };

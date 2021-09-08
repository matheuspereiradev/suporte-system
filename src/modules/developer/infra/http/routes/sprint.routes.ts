import { SprintController } from '../../../controllers/SprintController';
import ensureAuthenticated from '../../../../user/infra/http/middleware/ensureAuthenticated';
import { Router } from 'express';

const routesSprint = Router();
const sprintController = new SprintController();

routesSprint.get('/', ensureAuthenticated, sprintController.show);
routesSprint.get('/open', ensureAuthenticated, sprintController.findOpen);
routesSprint.get('/find/:id', ensureAuthenticated, sprintController.find);
routesSprint.post('/', ensureAuthenticated, sprintController.create);
routesSprint.put('/:id', ensureAuthenticated, sprintController.update);
routesSprint.patch('/close/:id', ensureAuthenticated, sprintController.changeOpenedStatus);
routesSprint.delete('/:id', ensureAuthenticated, sprintController.delete);


export { routesSprint };

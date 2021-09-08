import { TaskController } from '../../../controllers/TaskController';
import ensureAuthenticated from '../../../../user/infra/http/middleware/ensureAuthenticated';
import { Router } from 'express';

const routesTask = Router();
const taskController = new TaskController();

routesTask.get('/', ensureAuthenticated, taskController.show);
routesTask.get('/find/:id', ensureAuthenticated, taskController.find);
routesTask.post('/', ensureAuthenticated, taskController.create);
routesTask.put('/:id', ensureAuthenticated, taskController.update);
routesTask.patch('/move/:id', ensureAuthenticated, taskController.move);
routesTask.delete('/:id', ensureAuthenticated, taskController.delete);


export { routesTask };

import { Router } from 'express';
import { SessionController } from '../../../../user/controllers/SessionController'

const routesSession = Router();
const session = new SessionController();

routesSession.post('/', session.create);
routesSession.get('/:token', session.find);

export { routesSession };
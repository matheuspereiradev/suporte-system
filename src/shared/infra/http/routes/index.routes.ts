import {Router,Request,Response} from 'express';
import { routesUser } from '@modules/user/infra/http/routes/user.routes';
import {routesTicket} from '@modules/ticket/infra/http/routes/ticket.routes'
import { routesCompany } from '@modules/company/infra/http/routes/company.routes';

const routes = Router();

routes.get('/healthz',(req:Request,res:Response)=>{res.json({"status":"running"})});
routes.use('/user',routesUser);
routes.use('/ticket',routesTicket);
routes.use('/company',routesCompany)

export {routes};
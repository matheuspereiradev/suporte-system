import {Router,Request,Response} from 'express';
import { CompanyController } from '@modules/company/controllers/CompanyController';
import ensureAuthenticated from '@modules/user/infra/http/middleware/ensureAuthenticated';

const routesCompany = Router();
const companyController = new CompanyController();

routesCompany.get('/',ensureAuthenticated,companyController.show);

export {routesCompany};
import {Router,Request,Response} from 'express';
import { CompanyController } from '@modules/company/controllers/CompanyController';

const routesCompany = Router();
const companyController = new CompanyController();

routesCompany.get('/',companyController.show);

export {routesCompany};
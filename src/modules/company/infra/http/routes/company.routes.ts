import { Router } from 'express';
import ensureAuthenticated from '../../../../user/infra/http/middleware/ensureAuthenticated';
import { CompanyController } from '../../../controllers/CompanyController';

const routesCompany = Router();
const companyController = new CompanyController();

routesCompany.get('/', ensureAuthenticated, companyController.show);

export { routesCompany };

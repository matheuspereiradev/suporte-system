import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { CompanyRepository } from '@modules/company/infra/typeorm/repositories/CompanyRepository';

class CompanyController {

    async show(request: Request, response: Response) {

        const companyRepository = new CompanyRepository();
        const all = await companyRepository.findAll();

        return response.status(200).json(all);
    }
    
};

export { CompanyController };
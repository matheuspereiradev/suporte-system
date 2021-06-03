import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { CompanyRepository } from '@modules/company/infra/typeorm/repositories/CompanyRepository';
import { Company } from '../infra/typeorm/entities/Company';

class CompanyController {

    async show(request: Request, response: Response) {

        const companyRepository = new CompanyRepository();
        let all:Array<Company>;
        if(request.user.isAdmin){
            all = await companyRepository.findAll();
        }else{
            all = await companyRepository.findUserCompanies(request.user.company);
        };

        return response.status(200).json(all);
    }
    
};

export { CompanyController };
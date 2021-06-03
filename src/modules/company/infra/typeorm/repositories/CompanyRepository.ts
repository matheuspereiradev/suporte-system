
import { getRepository, Repository } from 'typeorm';
import ICompanyRepository from '@modules/company/IRepositories/ICompanyRepository';
import { Company } from '../entities/Company';

class CompanyRepository implements ICompanyRepository{

    private ormRepository:Repository<Company>;

    constructor(){
        this.ormRepository = getRepository(Company)
    }

    public async findByID(id:string):Promise<Company>{
        const all = await this.ormRepository.findOne({where: {id}});
        return all;
    };

    public async findAll():Promise<Array<Company>>{
        const all = await this.ormRepository.find();
        return all;
    }

    public async findUserCompanies(company:number):Promise<Array<Company>>{
        const all = await this.ormRepository.find({where:{id:company}});
        return all;
    }


    
}

export {CompanyRepository}
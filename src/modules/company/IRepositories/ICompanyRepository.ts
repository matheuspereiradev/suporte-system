import { Company } from '../infra/typeorm/entities/Company';

export default interface ICompanyTicketRepository{
    findAll():Promise<Array<Company>>;
    findByID(id:string):Promise<Company>;
}
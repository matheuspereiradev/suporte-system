import { User } from '@modules/user/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';

export default interface IUserRepository{
    findAll():Promise<Array<User>>;
    findByEmail(email:string):Promise<User>;
    findByID(id:string):Promise<User>;
    create(data:ICreateUserDTO):Promise<User>;
}
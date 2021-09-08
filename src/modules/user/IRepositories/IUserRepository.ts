import { User } from '../../user/infra/typeorm/entities/User';
import ICreateUserDTO from '../../user/dtos/ICreateUserDTO';
import IUpdateUserDTO from '../../user/dtos/IUpdateUserDTO';

export default interface IUserRepository {
    findAll(): Promise<Array<User>>;
    findAllAdmins(): Promise<Array<User>>;
    findByEmail(email: string): Promise<User>;
    findByID(id: string): Promise<User>;
    create(data: ICreateUserDTO): Promise<User>;
    update(data: IUpdateUserDTO): Promise<User>;
}
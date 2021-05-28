
import { getRepository, Repository } from 'typeorm';
import {User} from '@modules/user/infra/typeorm/entities/User';
import IUserRepository from '@modules/user/IRepositories/IUserRepository';

class UserRepository implements IUserRepository{

    private ormRepository:Repository<User>;

    constructor(){
        this.ormRepository = getRepository(User)
    }

    public async findByEmail(email:string):Promise<User>{
        const all = await this.ormRepository.findOne({where: {email}});
        return all;
    };

    public async findByID(id:string):Promise<User>{
        const all = await this.ormRepository.findOne({where: {id}});
        return all;
    };
    public async findAll():Promise<Array<User>>{
        const all = await this.ormRepository.find();
        return all;
    }

    
}

export {UserRepository}
import {User} from '@modules/user/infra/typeorm/entities/User';
import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';
import { v4 as uuid } from 'uuid'

class FakeUserRepository implements IUserRepository{

    private users:User [] = [];

    constructor(){
        const user =  new User(); 

        Object.assign(user,{id:"85879990-4d56-46c6-8c71-7b7b8d084e62",name:"usuário padrão",surname:"de teste", email:"teste@teste.com", password:"123hashed", gender:"M", created_at:new Date(), deleted_at:null})
        
        this.users.push(user)
    }

    public async findByEmail(email:string):Promise<User>{ 
               
        const foundUser = this.users.find(usr => usr.email === email,);

        return foundUser;
    };

    public async findByID(id:string):Promise<User>{
        const all = this.users.find(usr=> usr.id === id)
        return all;
    };

    public async findAll():Promise<Array<User>>{
        return this.users;

    }

}

export {FakeUserRepository}
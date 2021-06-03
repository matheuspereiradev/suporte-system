import { decode, verify } from 'jsonwebtoken';
import authConfig from "@config/auth";
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';
import { inject, injectable } from 'tsyringe';
import IUserRepository from '../IRepositories/IUserRepository';
import IHashProvider from '../infra/providers/HashProvider/models/IHashProvider';


interface TokenPayload{
    email:string,
    name:string,
    isAdmin:boolean,
    company:number,
    iat:number,
    exp:number,
    sub:string
}

@injectable()
class ValidateTokenService {

    constructor(
        @inject('UserRepository')
        private repository:IUserRepository
    ){}

    async execute(token:string): Promise<User> {
        
        const { secret } = authConfig.jwt;

        const decode = verify(token,authConfig.jwt.secret);
        
        const {email} = decode as TokenPayload;

        const user = await this.repository.findByEmail(email)

        delete user.password;

        return user;
    }
}

export { ValidateTokenService };

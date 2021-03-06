import { AuthUserService } from '@modules/user/services/AuthUserService';
import { Request, Response } from "express";
import { User } from  '@modules/user/infra/typeorm/entities/User';
import { container } from 'tsyringe';
import { ValidateTokenService } from '../services/ValidateTokenService';

interface Auth {
    email: string,
    password: string
}

interface ReturnUserAuth {
    user: User,
    token: string
}


class SessionController {


    async create(request: Request, response: Response) {

        const { email, password } = request.body;

        const sessionService = container.resolve(AuthUserService); 

        const { user, token } = await sessionService.authenticate({
            email,
            password
        });
        delete user.password;
        return response.status(200).json({ user, token });

    }

    async find(request: Request, response: Response){
        const {token} = request.params;

        const validateTokenService = container.resolve(ValidateTokenService); 

        const user = await validateTokenService.execute(token);
        
        return response.status(200).json({ user });

    }
}

export { SessionController };

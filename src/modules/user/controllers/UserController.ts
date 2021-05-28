import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';

class UserController {

    async show(request: Request, response: Response) {

        //const userRepository = new UserRepository();
        //const all = await userRepository.findAll();

        return response.status(200).json({});
    }
    
};

export { UserController };
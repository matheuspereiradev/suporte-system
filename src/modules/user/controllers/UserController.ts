import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { UserRepository } from '@modules/user/infra/typeorm/repositories/UserRepository';
import { container } from 'tsyringe';
import { CreateUserService } from '../services/CreateUserService';

class UserController {

    async show(request: Request, response: Response) {

        const userRepository = new UserRepository();
        const all = await userRepository.findAll();

        return response.status(200).json(all);
    }

    async create(request: Request, response: Response) {
        const { name, surname, email, password, login,gender } = request.body;
        
        const createUserService = container.resolve(CreateUserService);

        const user = await createUserService.execute({name, surname, email, password, login,gender})

        return response.status(201).json(user);
    }
    
};

export { UserController };
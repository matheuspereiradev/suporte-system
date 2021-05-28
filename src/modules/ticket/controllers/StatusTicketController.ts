import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { UserRepository } from '@modules/user/infra/typeorm/repositories/UserRepository';

class StatusTicketController {

    async show(request: Request, response: Response) {

        const userRepository = new UserRepository();
        const all = await userRepository.findAll();

        return response.status(200).json(all);
    }
    
};

export { StatusTicketController };
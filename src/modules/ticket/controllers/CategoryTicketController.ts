import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { CategoryTicketRepository } from '@modules/ticket/infra/typeorm/repositories/CategoryTicketRepository';

class CategoryTicketController {

    async show(request: Request, response: Response) {

        const categoryTicketRepository = new CategoryTicketRepository();
        const all = await categoryTicketRepository.findAll();

        return response.status(200).json(all);
    }
    
};

export { CategoryTicketController };
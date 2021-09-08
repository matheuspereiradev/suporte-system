import { CategoryTicketRepository } from '../infra/typeorm/repositories/CategoryTicketRepository';
import { Request, Response } from 'express';

class CategoryTicketController {

    async show(request: Request, response: Response) {

        const categoryTicketRepository = new CategoryTicketRepository();
        const all = await categoryTicketRepository.findAll();

        return response.status(200).json(all);
    }

};

export { CategoryTicketController };

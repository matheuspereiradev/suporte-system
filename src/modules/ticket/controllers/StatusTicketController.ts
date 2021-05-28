import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { StatusTicketRepository } from '@modules/ticket/infra/typeorm/repositories/StatusTicketRepository';

class StatusTicketController {

    async show(request: Request, response: Response) {

        const statusTicketRepository = new StatusTicketRepository();
        const all = await statusTicketRepository.findAll();

        return response.status(200).json(all);
    }
    
};

export { StatusTicketController };
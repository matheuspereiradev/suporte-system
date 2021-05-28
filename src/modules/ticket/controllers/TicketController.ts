import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { TicketRepository } from '@modules/ticket/infra/typeorm/repositories/TicketRepository';

class TicketController {

    async show(request: Request, response: Response) {

        const ticketRepository = new TicketRepository();
        const all = await ticketRepository.findAll();

        return response.status(200).json(all);
    }
    
};

export { TicketController };
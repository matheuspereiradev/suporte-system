import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { StatusTicketRepository } from '@modules/ticket/infra/typeorm/repositories/StatusTicketRepository';
import { ChangeTicketStatus } from '../services/ChangeTicketStatus';

class StatusTicketController {

    async show(request: Request, response: Response) {

        const statusTicketRepository = new StatusTicketRepository();
        const all = await statusTicketRepository.findAll();

        return response.status(200).json(all);
    }

    async changeStatus(request: Request, response: Response) {

        const {status} = request.body;
        const {ticket} = request.params;
        const changeStatusService = container.resolve(ChangeTicketStatus);

        const ticketChanged = await changeStatusService.execute(Number(ticket),status,request.user.id);

        return response.status(200).json(ticketChanged);
    }


    
};

export { StatusTicketController };
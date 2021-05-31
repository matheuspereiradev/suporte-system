import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { TicketRepository } from '@modules/ticket/infra/typeorm/repositories/TicketRepository';
import { container } from 'tsyringe';
import {CreateTicketService} from '@modules/ticket/services/CreateTicketService'

class TicketController {

    async show(request: Request, response: Response) {

        const ticketRepository = new TicketRepository();
        const all = await ticketRepository.findAll();

        return response.status(200).json(all);
    }

    async find(request: Request, response: Response){
        const id = request.params.id;
        const ticketRepository = new TicketRepository();
        const all = await ticketRepository.findByID(id);

        return response.status(200).json(all);
    }

    async create(request: Request, response: Response) {

        const {title,description,category,company} = request.body;
        const createTicketService = container.resolve(CreateTicketService);

        const ticket = await createTicketService.execute({title,description,idCategory:category,idCompany:company,idRequester:request.user.id});

        return response.status(201).json(ticket);
    }
    
};

export { TicketController };
import { TicketRepository } from '../infra/typeorm/repositories/TicketRepository';
import { CreateTicketService } from '../services/CreateTicketService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { Ticket } from '../infra/typeorm/entities/Ticket';
import { DeleteTicketService } from '../services/DeleteTicketService';

class TicketController {

    async show(request: Request, response: Response) {
        let all: Array<Ticket>;

        const ticketRepository = new TicketRepository();

        if (request.user.isAdmin) {
            all = await ticketRepository.findAll();
        } else {
            all = await ticketRepository.findAllForUser(request.user.company);
        }


        return response.status(200).json(all);
    }

    async find(request: Request, response: Response) {
        let all: Ticket;

        const id = request.params.id;
        const ticketRepository = new TicketRepository();

        if (request.user.isAdmin) {
            all = await ticketRepository.findByID(Number(id));
        } else {
            all = await ticketRepository.findByIDForUser(Number(id), request.user.company);
        }

        return response.status(200).json(all);
    }

    async create(request: Request, response: Response) {

        const { title, description, category, company } = request.body;
        const createTicketService = container.resolve(CreateTicketService);

        const ticket = await createTicketService.execute({ title, description, idCategory: category, idCompany: company, idRequester: request.user.id });

        return response.status(201).json(ticket);
    }

    async delete(request: Request, response: Response) {

        const { id } = request.params;

        const deleteTicketService = container.resolve(DeleteTicketService);

        const ticket = await deleteTicketService.execute(Number(id));

        return response.status(200).json(ticket);
    }

};

export { TicketController };

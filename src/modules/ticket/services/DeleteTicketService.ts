import Erro from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICreateTicketDTO from '../dtos/ICreateTicketDTO';
import { Ticket } from '../infra/typeorm/entities/Ticket';
import ITicketRepository from '../IRepositories/ITicketRepository';

@injectable()
class DeleteTicketService {

    constructor(
        @inject('TicketRepository') 
        private ticketRepository:ITicketRepository
    ){}

    public async execute(idTicket:number):Promise<Ticket> {

        const ticket = await this.ticketRepository.delete(idTicket);
    
        return ticket;
    }


};

export { DeleteTicketService };

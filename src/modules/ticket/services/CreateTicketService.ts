import { inject, injectable } from 'tsyringe';
import ICreateTicketDTO from '../dtos/ICreateTicketDTO';
import { Ticket } from '../infra/typeorm/entities/Ticket';
import ITicketRepository from '../IRepositories/ITicketRepository';

@injectable()
class CreateTicketService {

    constructor(
        @inject('TicketRepository') 
        private ticketRepository:ITicketRepository
    ){}

    public async execute(data:ICreateTicketDTO):Promise<Ticket> {

        const ticket = await this.ticketRepository.create(data);
        
        return ticket;
    }


};

export { CreateTicketService };

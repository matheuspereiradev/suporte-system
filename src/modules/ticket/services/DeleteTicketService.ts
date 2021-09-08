import { inject, injectable } from 'tsyringe';
import { Ticket } from '../infra/typeorm/entities/Ticket';
import ITicketRepository from '../IRepositories/ITicketRepository';

@injectable()
class DeleteTicketService {

    constructor(
        @inject('TicketRepository')
        private ticketRepository: ITicketRepository
    ) { }

    public async execute(idTicket: number): Promise<Ticket> {

        const ticket = await this.ticketRepository.delete(idTicket);

        return ticket;
    }


};

export { DeleteTicketService };


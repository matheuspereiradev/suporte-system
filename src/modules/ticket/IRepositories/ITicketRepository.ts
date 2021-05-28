import { Ticket } from '@modules/ticket/infra/typeorm/entities/Ticket';

export default interface ITicketRepository{
    findAll():Promise<Array<Ticket>>;
    findByID(id:string):Promise<Ticket>;
}
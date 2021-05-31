import { Ticket } from '@modules/ticket/infra/typeorm/entities/Ticket';
import ICreateTicketDTO from '@modules/ticket/dtos/ICreateTicketDTO'

export default interface ITicketRepository{
    findAll():Promise<Array<Ticket>>;
    findByID(id:string):Promise<Ticket>;
    create(data:ICreateTicketDTO):Promise<Ticket>;
}
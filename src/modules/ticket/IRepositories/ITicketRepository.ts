import { Ticket } from '@modules/ticket/infra/typeorm/entities/Ticket';
import ICreateTicketDTO from '@modules/ticket/dtos/ICreateTicketDTO'

export default interface ITicketRepository{
    findAll():Promise<Array<Ticket>>;
    findByID(id:number):Promise<Ticket>;
    findAllForUser(company:number):Promise<Array<Ticket>>;
    findByIDForUser(id:number,company:number):Promise<Ticket>;
    create(data:ICreateTicketDTO):Promise<Ticket>;
    setStatus(idTicket:number,statusCode:number):Promise<Ticket>;
}
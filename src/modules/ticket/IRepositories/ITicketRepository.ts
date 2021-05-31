import { Ticket } from '@modules/ticket/infra/typeorm/entities/Ticket';
import ICreateTicketDTO from '@modules/ticket/dtos/ICreateTicketDTO'

export default interface ITicketRepository{
    findAll():Promise<Array<Ticket>>;
    findByID(id:number):Promise<Ticket>;
    findAllTicketsCompany(company:number):Promise<Array<Ticket>>;
    findByIDWithCompany(id:number,company:number):Promise<Ticket>;
    create(data:ICreateTicketDTO):Promise<Ticket>;
    setStatus(idTicket:number,statusCode:number):Promise<Ticket>;
}
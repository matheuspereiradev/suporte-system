import { StatusTicket } from '@modules/ticket/infra/typeorm/entities/StatusTicket';

export default interface IStatusTicketRepository{
    findAll():Promise<Array<StatusTicket>>;
    findByID(id:number):Promise<StatusTicket>;
}
import { CategoryTicket } from '../infra/typeorm/entities/CategoryTicket';

export default interface ICategoryTicketRepository {
    findAll(): Promise<Array<CategoryTicket>>;
    findByID(id: string): Promise<CategoryTicket>;
}
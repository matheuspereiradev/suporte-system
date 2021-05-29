
import { getRepository, Repository } from 'typeorm';
import ITicketRepository from '@modules/ticket/IRepositories/ITicketRepository';
import { Ticket } from '../entities/Ticket';

class TicketRepository implements ITicketRepository{

    private ormRepository:Repository<Ticket>;

    constructor(){
        this.ormRepository = getRepository(Ticket)
    }

    public async findByID(id:string):Promise<Ticket>{
        const all = await this.ormRepository.findOne({relations: ["requester","status","category","company","interactions"],where: {id}});
        return all;
    };

    public async findAll():Promise<Array<Ticket>>{
        const all = await this.ormRepository.find({relations: ["requester","status","category","company","interactions"]});
        return all;
    }

    
}

export {TicketRepository}
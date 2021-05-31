import { getRepository, Repository } from 'typeorm';
import ITicketRepository from '@modules/ticket/IRepositories/ITicketRepository';
import { Ticket } from '../entities/Ticket';
import ICreateTicketDTO from '@modules/ticket/dtos/ICreateTicketDTO';

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
        const all = await this.ormRepository.find({relations: ["requester","status","category","company"]});
        return all;
    }

    public async findByIDWithCompany(id:string,company:number):Promise<Ticket>{
        const all = await this.ormRepository.findOne({relations: ["requester","status","category","company","interactions"],where: {id,idCompany:company}});
        return all;
    };

    public async findAllTicketsCompany(company:number):Promise<Array<Ticket>>{
        console.log(company)
        const all = await this.ormRepository.find({relations: ["requester","status","category","company"],where:{idCompany:company}});
        return all;
    }

    public async create(data:ICreateTicketDTO):Promise<Ticket>{

        const ticket = this.ormRepository.create(data);

        await this.ormRepository.save(ticket);

        return ticket;
    }

    
}

export {TicketRepository}
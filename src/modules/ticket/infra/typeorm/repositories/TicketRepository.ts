import { getRepository, Repository } from 'typeorm';
import ITicketRepository from '@modules/ticket/IRepositories/ITicketRepository';
import { Ticket } from '../entities/Ticket';
import ICreateTicketDTO from '@modules/ticket/dtos/ICreateTicketDTO';

class TicketRepository implements ITicketRepository{

    private ormRepository:Repository<Ticket>;

    constructor(){
        this.ormRepository = getRepository(Ticket)
    }

    public async findByID(id:number):Promise<Ticket>{
        const all = await this.ormRepository.findOne({relations: ["requester","status","category","company","interactions"],where: {id}});
        return all;
    };

    public async findAll():Promise<Array<Ticket>>{
        const all = await this.ormRepository.find({relations: ["requester","status","category","company"],order: {created_at:'DESC'}});
        
        return all;
    }

    public async findByIDForUser(id:number,company:number):Promise<Ticket>{
        const all = await this.ormRepository.findOne({relations: ["requester","status","category","company","interactions"],where: {id,idCompany:company}});
        
        const interactionsWithOutPrivateMessages = all.interactions.filter(msg => msg.isPrivate !== true) ;
        
        all.interactions=interactionsWithOutPrivateMessages;

        return all;
    };

    public async findAllForUser(company:number):Promise<Array<Ticket>>{
        const all = await this.ormRepository.find({relations: ["requester","status","category","company"],where:{idCompany:company},order: {created_at:'DESC'}});


        return all;
    }

    public async create(data:ICreateTicketDTO):Promise<Ticket>{

        const ticket = this.ormRepository.create(data);

        await this.ormRepository.save(ticket);

        return ticket;
    }

    public async setStatus(idTicket:number,statusCode:number):Promise<Ticket>{

        const ticket = await this.ormRepository.findOne({where:{id:idTicket}});

        ticket.idStatus = statusCode;

        await this.ormRepository.save(ticket);

        return ticket;
    }

    public async delete(idTicket:number):Promise<Ticket>{
        const ticket = await this.ormRepository.findOne({where:{id:idTicket}})
        await this.ormRepository.softDelete(idTicket);
        
        return ticket;
    }

    
}

export {TicketRepository}
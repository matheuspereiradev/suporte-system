import Erro from '@shared/errors/AppError';
import { container, inject, injectable } from 'tsyringe';
import ICreateInteractionDTO from '../dtos/ICreateInteractionDTO';
import { Interaction } from '../infra/typeorm/entities/Interaction';
import IInteractionRepository from '../IRepositories/IInteractionRepository';
import configStatus from '@config/status'
import ITicketRepository from '../IRepositories/ITicketRepository';
import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import {SetTicketStatus} from '@modules/ticket/services/SetTicketStatus';
@injectable()
class CreateInteractionService {

    constructor(
        @inject('InteractionRepository') 
        private interactionRepository:IInteractionRepository
    ){}

    public async execute(data:ICreateInteractionDTO, status:number=undefined):Promise<Interaction> {
        
        const interaction = await this.interactionRepository.create(data);
        const ticketStatus = container.resolve(SetTicketStatus);
        await ticketStatus.execute(data.idTicket, status, data.idSender);
        
        return interaction;
    }

};

export { CreateInteractionService };

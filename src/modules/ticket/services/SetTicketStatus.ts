import Erro from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICreateInteractionDTO from '../dtos/ICreateInteractionDTO';
import { Interaction } from '../infra/typeorm/entities/Interaction';
import IInteractionRepository from '../IRepositories/IInteractionRepository';
import configStatus from '@config/status';
import configCompany from '@config/company'
import ITicketRepository from '../IRepositories/ITicketRepository';
import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import { Ticket } from '../infra/typeorm/entities/Ticket';

@injectable()
class SetTicketStatus {

    constructor(
        @inject('InteractionRepository') 
        private interactionRepository:IInteractionRepository,

        @inject('TicketRepository') 
        private ticketRepository:ITicketRepository,

        @inject('UserRepository')
        private userRepository:IUserRepository
    ){}

    public async execute(idTicket:number, status:number, idSender:string):Promise<any> {

        const user = await this.userRepository.findByID(idSender)

        if((status)&&(user.idCompany===configCompany.admin.adminCompany)){
            this.ticketRepository.setStatus(idTicket,status)
        }else{
            const ticket = await this.ticketRepository.findByID(idTicket);
            
            //se oticket for novo
            if(ticket.idStatus === configStatus.statusCode.new){
                //e receber uma mensagem de um usuário da empresa
                if(user.idCompany === configCompany.admin.adminCompany){
                    await this.setStatusOpen(idTicket)
                }
            }else{ //se o ticket tiver qualquer outro status
                if(user.idCompany !== configCompany.admin.adminCompany){
                    await this.setStatusOpen(idTicket)
                }
            }
        }
        
    }

    public async setStatusOpen(idTicket:number){
        this.ticketRepository.setStatus(idTicket,configStatus.statusCode.open)
    }

};

export { SetTicketStatus };

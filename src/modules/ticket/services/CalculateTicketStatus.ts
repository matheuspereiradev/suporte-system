import { inject, injectable } from 'tsyringe';
import IInteractionRepository from '../IRepositories/IInteractionRepository';
import configStatus from '@config/status';
import ITicketRepository from '../IRepositories/ITicketRepository';
import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import IStatusTicketRepository from '../IRepositories/IStatusTicketRepository';

@injectable()
class CalculateTicketStatus {

    constructor(
        @inject('InteractionRepository') 
        private interactionRepository:IInteractionRepository,

        @inject('TicketRepository') 
        private ticketRepository:ITicketRepository,

        @inject('UserRepository')
        private userRepository:IUserRepository,

        @inject('StatusTicketRepository')
        private statusTicketRepository:IStatusTicketRepository,
        
    ){}

    public async execute(idTicket:number, status:number, idSender:string):Promise<any> {

        const user = await this.userRepository.findByID(idSender)

        if((status)&&(user.admin)){
            await this.ticketRepository.setStatus(idTicket,status)
            await this.createInteraction(idTicket,idSender,status);
            
        }else{
            const ticket = await this.ticketRepository.findByID(idTicket);
            
            //se oticket for novo
            if(ticket.idStatus === configStatus.statusCode.new){
                //e receber uma mensagem de um usuário da empresa
                if(user.admin){
                    await this.setStatusOpen(idTicket)
                    await this.createInteraction(idTicket,idSender,configStatus.statusCode.open);
                }
            }else{ //se o ticket tiver qualquer outro status
                if((!user.admin)&&(ticket.idStatus !== configStatus.statusCode.open)){
                    //e receber um msg do cliente o status vai para aberto
                    await this.setStatusOpen(idTicket);
                    await this.createInteraction(idTicket,idSender,configStatus.statusCode.open);
                }
            }
        }
        
    }

    public async setStatusOpen(idTicket:number){
        this.ticketRepository.setStatus(idTicket,configStatus.statusCode.open);
    }

    public async createInteraction(idTicket:number,idSender:string,idStatus:number){
        const status = await this.statusTicketRepository.findByID(idStatus);

        await this.interactionRepository.create({isPrivate:true,idTicket,idSender,text:"Alterou o status para "+status.name,file:null})
    }

};

export { CalculateTicketStatus };

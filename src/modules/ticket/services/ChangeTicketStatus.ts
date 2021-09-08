import { inject, injectable } from 'tsyringe';
import IInteractionRepository from '../IRepositories/IInteractionRepository';
import configStatus from '../../../config/status';
import ITicketRepository from '../IRepositories/ITicketRepository';
import IUserRepository from '../../user/IRepositories/IUserRepository';
import IStatusTicketRepository from '../IRepositories/IStatusTicketRepository';
import Erro from '../../../shared/errors/AppError';

@injectable()
class ChangeTicketStatus {

    constructor(
        @inject('InteractionRepository')
        private interactionRepository: IInteractionRepository,

        @inject('TicketRepository')
        private ticketRepository: ITicketRepository,

        @inject('UserRepository')
        private userRepository: IUserRepository,

        @inject('StatusTicketRepository')
        private statusTicketRepository: IStatusTicketRepository,

    ) { }

    public async execute(idTicket: number, status: number, idSender: string): Promise<any> {

        if (!status)
            throw new Erro('Status not defined', 2000)

        const user = await this.userRepository.findByID(idSender)

        if (user.admin) {
            await this.ticketRepository.setStatus(idTicket, status)
            await this.createInteraction(idTicket, idSender, status);
            return this.ticketRepository.findByID(idTicket)
        } else {
            throw new Erro('User not have permission', 2001)
        }

    }

    public async setStatusOpen(idTicket: number) {
        this.ticketRepository.setStatus(idTicket, configStatus.statusCode.open);
    }

    public async createInteraction(idTicket: number, idSender: string, idStatus: number) {
        const status = await this.statusTicketRepository.findByID(idStatus);

        await this.interactionRepository.create({ isPrivate: true, idTicket, idSender, text: "Alterou o status para " + status.name, file: null })
    }

};

export { ChangeTicketStatus };

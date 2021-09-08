import { container, inject, injectable } from 'tsyringe';
import ICreateInteractionDTO from '../dtos/ICreateInteractionDTO';
import { Interaction } from '../infra/typeorm/entities/Interaction';
import IInteractionRepository from '../IRepositories/IInteractionRepository';
import { CalculateTicketStatus } from '../services/CalculateTicketStatus';

@injectable()
class CreateInteractionService {

    constructor(
        @inject('InteractionRepository')
        private interactionRepository: IInteractionRepository
    ) { }

    public async execute(data: ICreateInteractionDTO, status: number = undefined): Promise<Interaction> {

        const interaction = await this.interactionRepository.create(data);
        const ticketStatus = container.resolve(CalculateTicketStatus);
        await ticketStatus.execute(data.idTicket, status, data.idSender);

        return interaction;
    }

};

export { CreateInteractionService };

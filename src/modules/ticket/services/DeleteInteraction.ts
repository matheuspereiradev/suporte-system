import Erro from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { Interaction } from '../infra/typeorm/entities/Interaction';
import { Ticket } from '../infra/typeorm/entities/Ticket';
import IInteractionRepository from '../IRepositories/IInteractionRepository';

@injectable()
class DeleteInteractionService {

    constructor(
        @inject('InteractionRepository')
        private interactionRepository: IInteractionRepository
    ) { }

    public async execute(idTicket: string, idUser: string): Promise<Interaction> {

        const interaction = await this.interactionRepository.findByID(idTicket)

        if (idUser !== interaction.idSender) {
            throw new Erro("Action denied", 1050, 403)
        }

        const ticket = await this.interactionRepository.delete(idTicket);

        return ticket;
    }


};

export { DeleteInteractionService };

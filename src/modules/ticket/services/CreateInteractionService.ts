import Erro from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICreateInteractionDTO from '../dtos/ICreateInteractionDTO';
import { Interaction } from '../infra/typeorm/entities/Interaction';
import IInteractionRepository from '../IRepositories/IInteractionRepository';

@injectable()
class CreateInteractionService {

    constructor(
        @inject('InteractionRepository') 
        private interactionRepository:IInteractionRepository
    ){}

    public async execute(data:ICreateInteractionDTO):Promise<Interaction> {

        const interaction = await this.interactionRepository.create(data);
        
        return interaction;
    }

};

export { CreateInteractionService };

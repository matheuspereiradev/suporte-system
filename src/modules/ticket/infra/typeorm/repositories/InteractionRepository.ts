
import { getRepository, Repository } from 'typeorm';
import IInteractionRepository from '@modules/ticket/IRepositories/IInteractionRepository';
import { Interaction } from '../entities/Interaction';
import ICreateInteractionDTO from '@modules/ticket/dtos/ICreatePropertyDTO';

class InteractionRepository implements IInteractionRepository{

    private ormRepository:Repository<Interaction>;

    constructor(){
        this.ormRepository = getRepository(Interaction)
    }

    public async create(data:ICreateInteractionDTO):Promise<Interaction>{

        const interaction = this.ormRepository.create(data);

        await this.ormRepository.save(interaction);

        return interaction;
    };

    
}

export {InteractionRepository}
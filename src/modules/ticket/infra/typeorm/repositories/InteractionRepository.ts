
import { getRepository, Repository } from 'typeorm';
import IInteractionRepository from '../../../IRepositories/IInteractionRepository';
import { Interaction } from '../entities/Interaction';
import ICreateInteractionDTO from '../../../dtos/ICreateInteractionDTO';

class InteractionRepository implements IInteractionRepository {

    private ormRepository: Repository<Interaction>;

    constructor() {
        this.ormRepository = getRepository(Interaction)
    }

    public async create(data: ICreateInteractionDTO): Promise<Interaction> {

        const interaction = this.ormRepository.create(data);

        await this.ormRepository.save(interaction);

        return interaction;
    };

    public async findByID(id: string): Promise<Interaction> {
        const all = await this.ormRepository.findOne({ where: { id } });
        return all;
    };

    public async delete(id: string): Promise<Interaction> {
        const interaction = await this.ormRepository.findOne({ where: { id } })
        await this.ormRepository.softDelete(id);

        return interaction;
    }


}

export { InteractionRepository }
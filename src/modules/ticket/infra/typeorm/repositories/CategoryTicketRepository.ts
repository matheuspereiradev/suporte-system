
import ICategoryTicketRepository from '../../../IRepositories/ICategoryTicketRepository';
import { getRepository, Repository } from 'typeorm';
import { CategoryTicket } from '../entities/CategoryTicket';

class CategoryTicketRepository implements ICategoryTicketRepository {

    private ormRepository: Repository<CategoryTicket>;

    constructor() {
        this.ormRepository = getRepository(CategoryTicket)
    }

    public async findByID(id: string): Promise<CategoryTicket> {
        const all = await this.ormRepository.findOne({ where: { id } });
        return all;
    };

    public async findAll(): Promise<Array<CategoryTicket>> {
        const all = await this.ormRepository.find();
        return all;
    }


}

export { CategoryTicketRepository };

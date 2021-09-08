
import IStatusTicketRepository from '../../../IRepositories/IStatusTicketRepository';
import { getRepository, Repository } from 'typeorm';
import { StatusTicket } from '../entities/StatusTicket';

class StatusTicketRepository implements IStatusTicketRepository {

    private ormRepository: Repository<StatusTicket>;

    constructor() {
        this.ormRepository = getRepository(StatusTicket)
    }

    public async findByID(id: number): Promise<StatusTicket> {
        const all = await this.ormRepository.findOne({ where: { id } });
        return all;
    };

    public async findAll(): Promise<Array<StatusTicket>> {
        const all = await this.ormRepository.find();
        return all;
    }


}

export { StatusTicketRepository };

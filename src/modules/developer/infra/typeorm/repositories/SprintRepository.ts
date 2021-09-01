import { getRepository, Repository } from 'typeorm';
import ISprintRepository from '@modules/developer/IRepositories/ISprintRepository';
import { Sprint } from '../entities/Sprint';
import ICreateSprintDTO from '@modules/developer/dtos/ICreateSprintDTO';
import IUpdateSprintDTO from '@modules/developer/dtos/IUpdateSprintDTO';

class SprintRepository implements ISprintRepository {

    private ormRepository: Repository<Sprint>;

    constructor() {
        this.ormRepository = getRepository(Sprint)
    }

    public async findByID(id: number): Promise<Sprint> {

        const all = await this.ormRepository.findOne({ where: { id }, relations: ["backlogs"] });

        return all;
    };

    public async findAll(): Promise<Array<Sprint>> {
        const all = await this.ormRepository.find();

        return all;
    }
    public async findOpen(): Promise<Array<Sprint>> {
        const all = await this.ormRepository.find({ where: { isOpen: true } });

        return all;
    }



    public async create(data: ICreateSprintDTO): Promise<Sprint> {
        const sprint = this.ormRepository.create(data);
        await this.ormRepository.save(sprint);
        return sprint;
    }

    // public async setStatus(idTicket: number, statusCode: number): Promise<Ticket> {

    //     const ticket = await this.ormRepository.findOne({ where: { id: idTicket } });

    //     ticket.idStatus = statusCode;

    //     await this.ormRepository.save(ticket);

    //     return ticket;
    // }
    public async update(data: IUpdateSprintDTO): Promise<Sprint> {
        const sprint = await this.ormRepository.findOne({ where: { id: data.id } });
        sprint.name = data.name;
        sprint.startDate = data.startDate;
        sprint.expectedEndDate = data.expectedEndDate;
        await this.ormRepository.save(sprint);
        return sprint;
    }
    public async closeSprint(id: number): Promise<Sprint> {
        const sprint = await this.ormRepository.findOne({ where: { id } });
        sprint.isOpen = !sprint.isOpen;
        await this.ormRepository.save(sprint);
        return sprint;
    }

    public async delete(id: number): Promise<Sprint> {
        const sprint = await this.ormRepository.findOne({ where: { id } })
        await this.ormRepository.softDelete(id);
        return sprint;
    }


}

export { SprintRepository }
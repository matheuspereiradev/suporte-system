import { getRepository, Repository } from 'typeorm';
import ISprintRepository from '@modules/developer/IRepositories/ISprintRepository';
import { Sprint } from '../entities/Sprint';
import ICreateSprintDTO from '@modules/developer/dtos/ICreateSprintDTO';
import IUpdateSprintDTO from '@modules/developer/dtos/IUpdateSprintDTO';
import IBacklogRepository from '@modules/developer/IRepositories/IBacklogRepository';
import { Backlog } from '../entities/Backlog';
import ICreateBacklogDTO from '@modules/developer/dtos/ICreateBacklogDTO';
import IUpdateBacklogDTO from '@modules/developer/dtos/IUpdateBacklogDTO';

class BacklogRepository implements IBacklogRepository {

    private ormRepository: Repository<Backlog>;

    constructor() {
        this.ormRepository = getRepository(Backlog)
    }

    public async findAll(): Promise<Array<Backlog>> {
        const all = await this.ormRepository.find({ relations: ["responsable", "tasks"] });
        return all;
    }

    public async findByID(id: number): Promise<Backlog> {
        const all = await this.ormRepository.findOne({ where: { id } });
        return all;
    };

    public async create(data: ICreateBacklogDTO): Promise<Backlog> {
        const backlog = this.ormRepository.create(data);
        console.log(data)
        await this.ormRepository.save(backlog);
        return backlog;
    }

    public async update(data: IUpdateBacklogDTO): Promise<Backlog> {
        const backlog = await this.ormRepository.findOne({ where: { id: data.id } });
        backlog.description = data.description;
        backlog.idResponsable = data.idResponsable;
        backlog.title = data.title;
        delete backlog.responsable
        await this.ormRepository.save(backlog);
        return backlog;
    }

    public async closeOpenBacklog(id: number): Promise<Backlog> {
        const backlog = await this.ormRepository.findOne({ where: { id } });
        backlog.isOpen = !backlog.isOpen;
        await this.ormRepository.save(backlog);
        return backlog;
    }

    public async delete(id: number): Promise<Backlog> {
        const backlog = await this.ormRepository.findOne({ where: { id } })
        await this.ormRepository.softDelete(id);
        return backlog;
    }


}

export { BacklogRepository }
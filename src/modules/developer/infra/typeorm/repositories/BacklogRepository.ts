import ICreateBacklogDTO from '../../../dtos/ICreateBacklogDTO';
import IUpdateBacklogDTO from '../../../dtos/IUpdateBacklogDTO';
import IBacklogRepository from '../../../IRepositories/IBacklogRepository';
import { getRepository, Repository } from 'typeorm';
import { Backlog } from '../entities/Backlog';

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
        // console.log(data)
        await this.ormRepository.save(backlog);
        return backlog;
    }

    public async update(data: IUpdateBacklogDTO): Promise<Backlog> {
        const backlog = await this.ormRepository.findOne({ where: { id: data.id } });
        backlog.description = data.description;
        backlog.idResponsable = data.idResponsable;
        backlog.title = data.title;
        backlog.domain = data.domain;
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

export { BacklogRepository };

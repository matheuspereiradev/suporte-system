import ICreateTaskDTO from '../../../dtos/ICreateTaskDTO';
import IUpdateTaskDTO from '../../../dtos/IUpdateTaskDTO';
import ITaskRepository from '../../../IRepositories/ITaskRepository';
import { getRepository, Repository } from 'typeorm';
import { Task } from '../entities/Task';

class TaskRepository implements ITaskRepository {

    private ormRepository: Repository<Task>;

    constructor() {
        this.ormRepository = getRepository(Task)
    }

    public async findAll(): Promise<Array<Task>> {
        const all = await this.ormRepository.find();
        return all;
    }

    public async findByID(id: number): Promise<Task> {
        const all = await this.ormRepository.findOne({ where: { id } });
        return all;
    };

    public async create(data: ICreateTaskDTO): Promise<Task> {
        const task = this.ormRepository.create(data);
        await this.ormRepository.save(task);
        return task;
    }

    public async update(data: IUpdateTaskDTO): Promise<Task> {
        const task = await this.ormRepository.findOne({ where: { id: data.id } });
        task.description = data.description;
        task.idResponsable = data.idResponsable;
        task.title = data.title;
        task.isBug = data.isBug;
        delete task.creator
        delete task.responsable
        await this.ormRepository.save(task);
        return task;
    }

    public async moveTask(id: number, position: number): Promise<Task> {
        const task = await this.ormRepository.findOne({ where: { id } });
        task.doPosition = position;
        await this.ormRepository.save(task);
        return task;
    }

    public async delete(id: number): Promise<Task> {
        const task = await this.ormRepository.findOne({ where: { id } })
        await this.ormRepository.softDelete(id);
        return task;
    }


}

export { TaskRepository };


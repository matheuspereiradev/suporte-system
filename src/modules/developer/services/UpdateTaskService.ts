import { inject, injectable } from 'tsyringe';
import IUpdateTaskDTO from '../dtos/IUpdateTaskDTO';
import { Task } from '../infra/typeorm/entities/Task';
import ITaskRepository from '../IRepositories/ITaskRepository';


@injectable()
class UpdateTaskService {

    constructor(
        @inject('TaskRepository')
        private taskRepository: ITaskRepository
    ) { }

    public async execute(data: IUpdateTaskDTO): Promise<Task> {
        const task = await this.taskRepository.update(data);
        return task;
    }


};

export { UpdateTaskService };


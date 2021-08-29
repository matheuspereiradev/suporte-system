import { inject, injectable } from 'tsyringe';
import ICreateTaskDTO from '../dtos/ICreateTaskDTO';
import { Task } from '../infra/typeorm/entities/Task';
import ITaskRepository from '../IRepositories/ITaskRepository';


@injectable()
class CreateTaskService {

    constructor(
        @inject('TaskRepository')
        private taskRepository: ITaskRepository
    ) { }

    public async execute(data: ICreateTaskDTO): Promise<Task> {
        const task = await this.taskRepository.create(data);
        return task;
    }


};

export { CreateTaskService };


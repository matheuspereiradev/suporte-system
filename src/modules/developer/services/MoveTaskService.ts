import { inject, injectable } from 'tsyringe';
import { Task } from '../infra/typeorm/entities/Task';
import ITaskRepository from '../IRepositories/ITaskRepository';


@injectable()
class MoveTaskService {

    constructor(
        @inject('TaskRepository')
        private taskRepository: ITaskRepository
    ) { }

    public async execute(id: number, position: number): Promise<Task> {
        const task = await this.taskRepository.moveTask(id, position);
        return task;
    }


};

export { MoveTaskService };


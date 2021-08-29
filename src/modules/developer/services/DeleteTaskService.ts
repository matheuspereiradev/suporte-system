import { inject, injectable } from 'tsyringe';
import ITaskRepository from '../IRepositories/ITaskRepository';

@injectable()
class DeleteTaskService {

    constructor(
        @inject('TaskRepository')
        private taskRepository: ITaskRepository
    ) { }

    public async execute(id: number): Promise<string> {
        await this.taskRepository.delete(id);
        return "Deleted success";
    }


};

export { DeleteTaskService };


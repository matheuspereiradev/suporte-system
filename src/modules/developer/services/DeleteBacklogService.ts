import { inject, injectable } from 'tsyringe';
import IBacklogRepository from '../IRepositories/IBacklogRepository';

@injectable()
class DeleteBacklogService {

    constructor(
        @inject('BacklogRepository')
        private backlogRepository: IBacklogRepository
    ) { }


    public async execute(id: number): Promise<string> {

        await this.backlogRepository.delete(id);

        return "Deleted success";
    }


};

export { DeleteBacklogService };


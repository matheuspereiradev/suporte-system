import { inject, injectable } from 'tsyringe';
import ICreateBacklogDTO from '../dtos/ICreateBacklogDTO';
import { Backlog } from '../infra/typeorm/entities/Backlog';
import IBacklogRepository from '../IRepositories/IBacklogRepository';


@injectable()
class CreateBacklogService {

    constructor(
        @inject('BacklogRepository')
        private backlogRepository: IBacklogRepository
    ) { }

    public async execute(data: ICreateBacklogDTO): Promise<Backlog> {

        const backlog = await this.backlogRepository.create(data);

        return backlog;
    }


};

export { CreateBacklogService };

import { inject, injectable } from 'tsyringe';
import { Backlog } from '../infra/typeorm/entities/Backlog';
import { Sprint } from '../infra/typeorm/entities/Sprint';
import IBacklogRepository from '../IRepositories/IBacklogRepository';


@injectable()
class ChangeBacklogOpenedStatusService {

    constructor(
        @inject('BacklogRepository')
        private backlogRepository: IBacklogRepository
    ) { }

    public async execute(id: number): Promise<Backlog> {

        const backlog = await this.backlogRepository.closeOpenBacklog(
            id
        );

        return backlog;
    }


};

export { ChangeBacklogOpenedStatusService };


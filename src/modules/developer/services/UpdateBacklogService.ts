import { inject, injectable } from 'tsyringe';
import IUpdateBacklogDTO from '../dtos/IUpdateBacklogDTO';
import IUpdateSprintDTO from '../dtos/IUpdateSprintDTO';
import { Backlog } from '../infra/typeorm/entities/Backlog';
import { Sprint } from '../infra/typeorm/entities/Sprint';
import IBacklogRepository from '../IRepositories/IBacklogRepository';
import ISprintRepository from '../IRepositories/ISprintRepository';


@injectable()
class UpdateBacklogService {

    constructor(
        @inject('BacklogRepository')
        private backlogRepository: IBacklogRepository
    ) { }

    public async execute({ id, description, idResponsable, title }: IUpdateBacklogDTO): Promise<Backlog> {

        const backlog = await this.backlogRepository.update({
            id, description, idResponsable, title
        });

        return backlog;
    }


};

export { UpdateBacklogService };

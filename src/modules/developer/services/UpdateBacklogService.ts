import { inject, injectable } from 'tsyringe';
import IUpdateBacklogDTO from '../dtos/IUpdateBacklogDTO';
import { Backlog } from '../infra/typeorm/entities/Backlog';
import IBacklogRepository from '../IRepositories/IBacklogRepository';


@injectable()
class UpdateBacklogService {

    constructor(
        @inject('BacklogRepository')
        private backlogRepository: IBacklogRepository
    ) { }

    public async execute({ id, description, idResponsable, title, domain }: IUpdateBacklogDTO): Promise<Backlog> {

        const backlog = await this.backlogRepository.update({
            id, description, idResponsable, title, domain
        });

        return backlog;
    }


};

export { UpdateBacklogService };


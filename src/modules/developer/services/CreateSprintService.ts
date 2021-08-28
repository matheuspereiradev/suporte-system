import { inject, injectable } from 'tsyringe';
import ICreatesprintDTO from '../dtos/ICreateSprintDTO';
import { Sprint } from '../infra/typeorm/entities/Sprint';
import ISprintRepository from '../IRepositories/ISprintRepository';


@injectable()
class CreateSprintService {

    constructor(
        @inject('SprintRepository')
        private sprintRepository: ISprintRepository
    ) { }

    public async execute(data: ICreatesprintDTO): Promise<Sprint> {

        const sprint = await this.sprintRepository.create(data);

        return sprint;
    }


};

export { CreateSprintService };

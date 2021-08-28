import { inject, injectable } from 'tsyringe';
import IUpdateSprintDTO from '../dtos/IUpdateSprintDTO';
import { Sprint } from '../infra/typeorm/entities/Sprint';
import ISprintRepository from '../IRepositories/ISprintRepository';


@injectable()
class UpdateSprintService {

    constructor(
        @inject('SprintRepository')
        private sprintRepository: ISprintRepository
    ) { }

    public async execute({ id, name, expectedEndDate, startDate }: IUpdateSprintDTO): Promise<Sprint> {

        const sprint = await this.sprintRepository.update({
            id, name, expectedEndDate, startDate
        });

        return sprint;
    }


};

export { UpdateSprintService };

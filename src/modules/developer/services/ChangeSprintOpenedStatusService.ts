import { inject, injectable } from 'tsyringe';
import IUpdateSprintDTO from '../dtos/IUpdateSprintDTO';
import { Sprint } from '../infra/typeorm/entities/Sprint';
import ISprintRepository from '../IRepositories/ISprintRepository';


@injectable()
class ChangeSprintOpenedStatusService {

    constructor(
        @inject('SprintRepository')
        private sprintRepository: ISprintRepository
    ) { }

    public async execute(id: number): Promise<Sprint> {

        const sprint = await this.sprintRepository.closeSprint(
            id
        );

        return sprint;
    }


};

export { ChangeSprintOpenedStatusService };

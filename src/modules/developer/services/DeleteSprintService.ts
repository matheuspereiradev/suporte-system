import Erro from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICreatesprintDTO from '../dtos/ICreateSprintDTO';
import { Sprint } from '../infra/typeorm/entities/Sprint';
import ISprintRepository from '../IRepositories/ISprintRepository';

@injectable()
class DeleteSprintService {

    constructor(
        @inject('SprintRepository')
        private sprintRepository: ISprintRepository
    ) { }


    public async execute(id: number): Promise<string> {

        await this.sprintRepository.delete(id);

        return "Deleted success";
    }


};

export { DeleteSprintService };

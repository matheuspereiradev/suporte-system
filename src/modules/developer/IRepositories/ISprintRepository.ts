import { Sprint } from "../infra/typeorm/entities/Sprint";
import ICreateSprintDTO from '@modules/developer/dtos/ICreateSprintDTO';
import IUpdateSprintDTO from "../dtos/IUpdateSprintDTO";

export default interface ISprintRepository {
    findAll(): Promise<Array<Sprint>>;
    findByID(id: number): Promise<Sprint>;
    create(data: ICreateSprintDTO): Promise<Sprint>;
    update(data: IUpdateSprintDTO): Promise<Sprint>;
    closeSprint(id: number): Promise<Sprint>;
    delete(id: number): Promise<Sprint>;
}
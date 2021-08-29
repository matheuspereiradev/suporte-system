import ICreateBacklogDTO from "../dtos/ICreateBacklogDTO";
import IUpdateBacklogDTO from "../dtos/IUpdateBacklogDTO";
import { Backlog } from "../infra/typeorm/entities/Backlog";
// import ICreateSprintDTO from '@modules/developer/dtos/ICreateSprintDTO';
// import IUpdateSprintDTO from "../dtos/IUpdateSprintDTO";

export default interface IBacklogRepository {
    findAll(): Promise<Array<Backlog>>;
    // findByID(id: number): Promise<Backlog>;
    // findBySprint(id: number): Promise<Backlog>;
    create(data: ICreateBacklogDTO): Promise<Backlog>;
    update(data: IUpdateBacklogDTO): Promise<Backlog>;
    closeOpenBacklog(id: number): Promise<Backlog>;
    delete(id: number): Promise<Backlog>;
}
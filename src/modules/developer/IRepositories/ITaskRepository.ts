import ICreateTaskDTO from "../dtos/ICreateTaskDTO";
import IUpdateTaskDTO from "../dtos/IUpdateTaskDTO";
import { Task } from "../infra/typeorm/entities/Task";

export default interface ITaskRepository {
    findAll(): Promise<Array<Task>>;
    findByID(id: number): Promise<Task>;
    create(data: ICreateTaskDTO): Promise<Task>;
    update(data: IUpdateTaskDTO): Promise<Task>;
    moveTask(id: number, position: number): Promise<Task>;
    delete(id: number): Promise<Task>;
}
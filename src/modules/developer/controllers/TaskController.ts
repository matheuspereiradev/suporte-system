import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { TaskRepository } from '../infra/typeorm/repositories/TaskRepository';
import { CreateTaskService } from '../services/CreateTaskService';
import { DeleteTaskService } from '../services/DeleteTaskService';
import { MoveTaskService } from '../services/MoveTaskService';
import { UpdateTaskService } from '../services/UpdateTaskService';


class TaskController {

    async show(request: Request, response: Response) {
        const taskRepository = new TaskRepository();
        const all = await taskRepository.findAll();
        return response.status(200).json(all);
    }

    // async find(request: Request, response: Response) {
    //     const id = request.params.id;
    //     const sprintRepository = new SprintRepository();
    //     const all = await sprintRepository.findByID(Number(id))
    //     return response.status(200).json(all);
    // }

    async create(request: Request, response: Response) {
        const idCreator = request.user.id;
        const { title, description, isBug, idBacklog, idResponsable } = request.body;
        const createTaskService = container.resolve(CreateTaskService);
        const backlog = await createTaskService.execute({ createdBy: idCreator, title, description, isBug, idBacklog, idResponsable });
        return response.status(201).json(backlog);
    }

    async update(request: Request, response: Response) {
        const id = request.params.id;
        const { title, description, isBug, idBacklog, idResponsable } = request.body;

        const updateTaskService = container.resolve(UpdateTaskService);
        const task = await updateTaskService.execute({ id: Number(id), title, description, isBug, idBacklog, idResponsable });
        return response.status(200).json(task);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const deleteTaskService = container.resolve(DeleteTaskService);
        const message = await deleteTaskService.execute(Number(id));
        return response.status(200).json({ "message": message });
    }

    async move(request: Request, response: Response) {
        const id = request.params.id;
        const { position } = request.body;
        const moveTaskService = container.resolve(MoveTaskService);
        const task = await moveTaskService.execute(Number(id), position);
        return response.status(200).json(task);
    }
};

export { TaskController };


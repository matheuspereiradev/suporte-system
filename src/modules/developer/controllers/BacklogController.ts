import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { BacklogRepository } from '../infra/typeorm/repositories/BacklogRepository';
import { ChangeBacklogOpenedStatusService } from '../services/ChangeBacklogOpenedStatusService';
import { CreateBacklogService } from '../services/CreateBacklogService';
import { DeleteBacklogService } from '../services/DeleteBacklogService';
import { UpdateBacklogService } from '../services/UpdateBacklogService';


class BacklogController {

    async show(request: Request, response: Response) {

        const backlogRepository = new BacklogRepository();

        const all = await backlogRepository.findAll();

        return response.status(200).json(all);
    }

    // async find(request: Request, response: Response) {

    //     const id = request.params.id;
    //     const sprintRepository = new SprintRepository();

    //     const all = await sprintRepository.findByID(Number(id))

    //     return response.status(200).json(all);
    // }

    async create(request: Request, response: Response) {
        const { title, description, idSprint, idResponsable, domain } = request.body;
        const createBacklogService = container.resolve(CreateBacklogService);
        const backlog = await createBacklogService.execute({ title, description, idSprint, idResponsable, domain });
        return response.status(201).json(backlog);
    }

    async update(request: Request, response: Response) {
        const id = request.params.id;
        const { title, description, idResponsable, domain } = request.body;
        const updateBacklogService = container.resolve(UpdateBacklogService);
        const backlog = await updateBacklogService.execute({ id: Number(id), title, description, idResponsable, domain });
        return response.status(200).json(backlog);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const deleteBacklogService = container.resolve(DeleteBacklogService);
        const message = await deleteBacklogService.execute(Number(id));
        return response.status(200).json({ "message": message });
    }

    async changeOpenedStatus(request: Request, response: Response) {
        const id = request.params.id;
        const changeBacklogOpenedStatusService = container.resolve(ChangeBacklogOpenedStatusService);
        const sprint = await changeBacklogOpenedStatusService.execute(Number(id));
        return response.status(200).json(sprint);
    }
};

export { BacklogController };

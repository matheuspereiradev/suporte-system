import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { TicketRepository } from '@modules/ticket/infra/typeorm/repositories/TicketRepository';
import { container } from 'tsyringe';
import { CreateTicketService } from '@modules/ticket/services/CreateTicketService';
import { SprintRepository } from '../infra/typeorm/repositories/SprintRepository';
import { CreateSprintService } from '../services/CreateSprintService';
import { DeleteSprintService } from '../services/DeleteSprintService';
import { UpdateSprintService } from '../services/UpdateSprintService';
import { ChangeSprintOpenedStatusService } from '../services/ChangeSprintOpenedStatusService';
import { BacklogRepository } from '../infra/typeorm/repositories/BacklogRepository';
import { CreateBacklogService } from '../services/CreateBacklogService';
import { DeleteBacklogService } from '../services/DeleteBacklogService';
import { UpdateBacklogService } from '../services/UpdateBacklogService';
import { ChangeBacklogOpenedStatusService } from '../services/ChangeBacklogOpenedStatusService';


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
        const idResponsable = request.user.id;
        const { title, description, idSprint } = request.body;
        const createBacklogService = container.resolve(CreateBacklogService);
        const backlog = await createBacklogService.execute({ title, description, idSprint, idResponsable });
        return response.status(201).json(backlog);
    }

    async update(request: Request, response: Response) {
        const id = request.params.id;
        const { title, description, idResponsable } = request.body;
        const updateBacklogService = container.resolve(UpdateBacklogService);
        const backlog = await updateBacklogService.execute({ id: Number(id), title, description, idResponsable });
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
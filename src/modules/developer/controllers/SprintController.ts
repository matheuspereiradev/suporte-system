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


class SprintController {

    async show(request: Request, response: Response) {

        const sprintRepository = new SprintRepository();

        const all = await sprintRepository.findAll();

        return response.status(200).json(all);
    }

    async find(request: Request, response: Response) {

        const id = request.params.id;
        const sprintRepository = new SprintRepository();

        const all = await sprintRepository.findByID(Number(id))

        return response.status(200).json(all);
    }

    async create(request: Request, response: Response) {

        const { name, startDate, expectedEndDate } = request.body;
        const createSprintService = container.resolve(CreateSprintService);
        const sprint = await createSprintService.execute({ name, startDate, expectedEndDate });
        return response.status(201).json(sprint);
    }
    async update(request: Request, response: Response) {
        const id = request.params.id;
        const { name, startDate, expectedEndDate } = request.body;
        const updateSprintService = container.resolve(UpdateSprintService);
        const sprint = await updateSprintService.execute({ id: Number(id), name, startDate, expectedEndDate });
        return response.status(200).json(sprint);
    }

    async delete(request: Request, response: Response) {

        const { id } = request.params;
        const deleteSprintService = container.resolve(DeleteSprintService);
        const mensage = await deleteSprintService.execute(Number(id));
        return response.status(200).json({ "message": mensage });
    }

    async changeOpenedStatus(request: Request, response: Response) {
        const id = request.params.id;
        const changeSprintOpenedStatusService = container.resolve(ChangeSprintOpenedStatusService);
        const sprint = await changeSprintOpenedStatusService.execute(Number(id));
        return response.status(200).json(sprint);
    }
};

export { SprintController };
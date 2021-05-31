import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { InteractionRepository } from '@modules/ticket/infra/typeorm/repositories/InteractionRepository';
import { container } from 'tsyringe';
import { CreateInteractionService } from '@modules/ticket/services/CreateInteractionService';
import { DeleteInteractionService } from '../services/DeleteInteraction';

class InteractionController {

    async create(request: Request, response: Response) {

        const {text,file,ticket,isPrivate, status} = request.body;

        const createInteractionService = container.resolve(CreateInteractionService);

        const interaction = await createInteractionService.execute({text,file,idTicket:ticket,idSender:request.user.id,isPrivate},status);

        return response.status(201).json(interaction);
    }

    async delete(request: Request, response: Response) {
        
        const {id} = request.params;

        const deleteInteractionService = container.resolve(DeleteInteractionService);

        const ticket = await deleteInteractionService.execute(id,request.user.id);

        return response.status(200).json(ticket);
    }
    
};

export { InteractionController };
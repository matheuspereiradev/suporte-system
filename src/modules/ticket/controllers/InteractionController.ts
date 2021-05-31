import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { InteractionRepository } from '@modules/ticket/infra/typeorm/repositories/InteractionRepository';
import { container } from 'tsyringe';
import { CreateInteractionService } from '@modules/ticket/services/CreateInteractionService';

class InteractionController {

    async create(request: Request, response: Response) {

        const {text,file,ticket,isPrivate} = request.body;

        const createInteractionService = container.resolve(CreateInteractionService);

        const interaction = await createInteractionService.execute({text,file,idTicket:ticket,idSender:request.user.id,isPrivate});

        return response.status(201).json(interaction);
    }
    
};

export { InteractionController };
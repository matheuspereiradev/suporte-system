import { container } from 'tsyringe';

import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import { UserRepository } from '@modules/user/infra/typeorm/repositories/UserRepository';
import ITicketRepository from '@modules/ticket/IRepositories/ITicketRepository';
import { TicketRepository } from '@modules/ticket/infra/typeorm/repositories/TicketRepository';
import IHashProvider from '@modules/user/infra/providers/HashProvider/models/IHashProvider';
import bcryptHashProvider from '@modules/user/infra/providers/HashProvider/implementation/bcryptHashProvider';
import ISendMail from '@shared/infra/providers/mail/model/ISendMail';
import NodeMeiler from '@shared/infra/providers/mail/implementations/nodeMailerProvider';
import IInteractionRepository from '@modules/ticket/IRepositories/IInteractionRepository';
import { InteractionRepository } from '@modules/ticket/infra/typeorm/repositories/InteractionRepository';
import IStatusTicketRepository from '@modules/ticket/IRepositories/IStatusTicketRepository';
import { StatusTicketRepository } from '@modules/ticket/infra/typeorm/repositories/StatusTicketRepository';
import { SprintRepository } from '@modules/developer/infra/typeorm/repositories/SprintRepository';
import ISprintRepository from '@modules/developer/IRepositories/ISprintRepository';

container.registerSingleton<IHashProvider>('HashProvider', bcryptHashProvider);
container.registerSingleton<ISendMail>('SendMail', NodeMeiler);
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ITicketRepository>('TicketRepository', TicketRepository);
container.registerSingleton<IInteractionRepository>('InteractionRepository', InteractionRepository);
container.registerSingleton<IStatusTicketRepository>('StatusTicketRepository', StatusTicketRepository);
container.registerSingleton<ISprintRepository>('SprintRepository', SprintRepository);
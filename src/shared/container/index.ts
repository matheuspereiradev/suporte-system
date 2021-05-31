import {container} from 'tsyringe';

import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import {UserRepository} from '@modules/user/infra/typeorm/repositories/UserRepository';
import ITicketRepository from '@modules/ticket/IRepositories/ITicketRepository';
import {TicketRepository} from '@modules/ticket/infra/typeorm/repositories/TicketRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ITicketRepository>('TicketRepository', TicketRepository);

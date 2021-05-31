import {container} from 'tsyringe';

import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import {UserRepository} from '@modules/user/infra/typeorm/repositories/UserRepository';
import ITicketRepository from '@modules/ticket/IRepositories/ITicketRepository';
import {TicketRepository} from '@modules/ticket/infra/typeorm/repositories/TicketRepository';
import IHashProvider from '@modules/user/infra/providers/HashProvider/models/IHashProvider';
import bcryptHashProvider from '@modules/user/infra/providers/HashProvider/implementation/bcryptHashProvider';
import ISendMail from '@shared/infra/providers/mail/model/ISendMail';
import NodeMeiler from '@shared/infra/providers/mail/implementations/nodeMailerProvider';

container.registerSingleton<IHashProvider>('HashProvider', bcryptHashProvider);
container.registerSingleton<ISendMail>('SendMail',NodeMeiler);
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ITicketRepository>('TicketRepository', TicketRepository);

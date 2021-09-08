import ISendMail from '../../../shared/infra/providers/mail/model/ISendMail';
import { inject, injectable } from 'tsyringe';
import EmailConfig from "../../../config/email";
import Erro from '../../../shared/errors/AppError';
import { User } from '../../user/infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IHashProvider from '../infra/providers/HashProvider/models/IHashProvider';
import IUserRepository from '../IRepositories/IUserRepository';


interface IUserWelcomeEmail {
    email: string,
    name: string,
    surname: string
}

@injectable()
class CreateUserService {
    //isso é equivalete a criar uma variavel atribuir o paramtro a ele
    constructor(
        @inject('SendMail')
        private mailProvider: ISendMail,

        @inject('UserRepository')
        private repository: IUserRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider
    ) { }

    public async execute({ name, surname, email, password, gender }: ICreateUserDTO): Promise<User> {

        await this.validateEmail(email);

        const hashedPassword = await this.hashProvider.genarateHash(password);
        const user = await this.repository.create({
            name, surname, email, password: hashedPassword, gender
        });

        //await this.sendWelcomeMail({email, name, surname});

        return user;
    }

    public async validateEmail(email: string) {
        const emailAlreadyUse = await this.repository.findByEmail(email);

        if (emailAlreadyUse) {
            throw new Erro("Email already in use", 1002, 409);
        }
    }

    public async sendWelcomeMail({ email, name, surname }: IUserWelcomeEmail): Promise<string> {

        const variables = await this.assemblyWelcomeVariables(name, surname);

        const link = await this.mailProvider.sendEmail(email, EmailConfig.welcomeMail.title, variables, EmailConfig.welcomeMail.model);

        return link;
    }

    public async assemblyWelcomeVariables(name: string, surname: string): Promise<Object> {

        const variables = {
            surname,
            name
        }

        return variables;
    }

};

export { CreateUserService };


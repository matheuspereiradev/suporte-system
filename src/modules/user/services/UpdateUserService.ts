import { DocumentValidation } from '@shared/helpers/documentValidation';
import { inject, injectable } from 'tsyringe'
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';
import IUserRepository from '../IRepositories/IUserRepository';
import IHashProvider from '../infra/providers/HashProvider/models/IHashProvider';
import ISendMail from '@shared/infra/providers/mail/model/ISendMail';
import EmailConfig from '@config/email';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';


@injectable()
class UpdateUserService {
    //isso é equivalete a criar uma variavel atribuir o paramtro a ele
    constructor(
        @inject('SendMail')
        private mailProvider: ISendMail,

        @inject('UserRepository')
        private repository: IUserRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider
    ) { }

    public async execute({ id, name, surname, password, password2, gender }: IUpdateUserDTO): Promise<User> {
        
        if (password !== password2)
        throw new Erro("password not are equals", 1033);
        
        const hashedPassword = await this.hashProvider.genarateHash(password);
        const user = await this.repository.update({
            id, name, surname, password: hashedPassword, password2, gender
        });

        return user;
    }


};

export { UpdateUserService };
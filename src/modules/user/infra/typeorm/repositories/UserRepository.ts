
import { getRepository, Repository } from 'typeorm';
import { User } from '@modules/user/infra/typeorm/entities/User';
import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';
import IUpdateUserDTO from '@modules/user/dtos/IUpdateUserDTO';

class UserRepository implements IUserRepository {

    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User)
    }

    public async findByEmail(email: string): Promise<User> {
        const all = await this.ormRepository.findOne({ where: { email } });
        return all;
    };
    public async findAllAdmins(): Promise<User[]> {
        const all = await this.ormRepository.find({ where: { admin: true } });
        return all;
    };

    public async findByID(id: string): Promise<User> {
        const all = await this.ormRepository.findOne({ where: { id } });
        return all;
    };

    public async findAll(): Promise<Array<User>> {
        const all = await this.ormRepository.find();
        return all;
    }

    public async create({ name, surname, email, password, gender }: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create({ name, surname, email, password, gender });

        await this.ormRepository.save(user);

        return user;
    }

    public async update({ id, name, surname, gender, password }: IUpdateUserDTO): Promise<User> {
        const user = await this.ormRepository.findOne(id);

        user.name = name;
        user.surname = surname;
        user.gender = gender;
        user.password = password;

        await this.ormRepository.save(user);

        return user;
    }

}

export { UserRepository }
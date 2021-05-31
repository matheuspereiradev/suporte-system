import ICreateInteractionDTO from '../dtos/ICreateInteractionDTO';
import { Interaction } from '../infra/typeorm/entities/Interaction';

export default interface IInteractionRepository{
    create(data:ICreateInteractionDTO):Promise<Interaction>;
    findByID(id:string):Promise<Interaction>;
    delete(id:string):Promise<Interaction>;
}
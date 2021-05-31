import ICreateInteractionDTO from '../dtos/ICreateInteractionDTO';
import { Interaction } from '../infra/typeorm/entities/Interaction';

export default interface IInteractionRepository{
    create(data:ICreateInteractionDTO):Promise<Interaction>;
}
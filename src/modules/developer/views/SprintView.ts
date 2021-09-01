import { Sprint } from '../infra/typeorm/entities/Sprint';
import BacklogView from './BacklogView';


export default {
    render({ id, name, startDate, expectedEndDate, isOpen, backlogs }: Sprint) {
        return {
            id,
            name,
            startDate,
            expectedEndDate,
            isOpen,
            backlogs: BacklogView.renderMany(backlogs)
        }
    },

    // renderMany(orfanatos:Orfanato[]){
    //     return orfanatos.map(orfanato=>this.render(orfanato))
    // }
}
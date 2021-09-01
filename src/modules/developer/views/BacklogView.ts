import { Backlog } from '../infra/typeorm/entities/Backlog';
import UserView from '@modules/user/views/UserView';
import TaskView from './TaskView';


export default {
    render({ id, title, description, isOpen, created_at, responsable, tasks }: Backlog) {
        return {
            id,
            title,
            description,
            isOpen,
            created_at,
            responsable: UserView.render(responsable),
            tasks: TaskView.renderMany(tasks)
        }
    },

    renderMany(backlog: Backlog[]) {
        return backlog.map(back => this.render(back))
    }
}

import { Backlog } from '../infra/typeorm/entities/Backlog';
import UserView from '../../user/views/UserView';
import TaskView from './TaskView';


export default {
    render({ id, title, description, isOpen, created_at, responsable, tasks, domain }: Backlog) {
        return {
            id,
            title,
            description,
            isOpen,
            domain,
            created_at,
            responsable: UserView.render(responsable),
            tasks: TaskView.renderMany(tasks)
        }
    },

    renderMany(backlog: Backlog[]) {
        return backlog.map(back => this.render(back))
    }
}

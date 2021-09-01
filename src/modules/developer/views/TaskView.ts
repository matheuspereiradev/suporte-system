import UserView from '@modules/user/views/UserView';
import { Sprint } from '../infra/typeorm/entities/Sprint';
import { Task } from '../infra/typeorm/entities/Task';
import BacklogView from './BacklogView';

function groupBy(arr: Array<Task>, prop: string) {
    // const map = new Map(Array.from(arr, obj => [obj[prop], []]));
    // arr.forEach(obj => map.get(obj[prop]).push(obj));

    // return Array.from(map.values());
    const resut = [[], [], []]
    arr.map((arr) => {
        resut[arr.doPosition - 1].push(arr)
    })
    return resut
}

export default {
    render({ id, title, description, isBug, doPosition, created_at, creator, responsable }: Task) {
        return {
            id,
            title,
            description,
            isBug,
            doPosition,
            created_at,
            createdBy: UserView.render(creator),
            responsable: UserView.render(responsable)
        }
    },

    renderMany(tasks: Task[]) {
        const rededTasks = tasks.map(task => this.render(task))
        const grouped = groupBy(rededTasks, "doPosition")
        return grouped;
    }
}

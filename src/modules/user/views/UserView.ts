import { User } from '../infra/typeorm/entities/User';


export default {
    render({ id, name, admin, email, gender, company, surname }: User) {
        return {
            id,
            name,
            admin,
            email,
            gender,
            company,
            surname
        }
    },

    renderMany(users: User[]) {
        return users.map(user => this.render(user))
    }
}
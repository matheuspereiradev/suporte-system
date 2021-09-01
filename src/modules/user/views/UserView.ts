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

    // renderMany(orfanatos:Orfanato[]){
    //     return orfanatos.map(orfanato=>this.render(orfanato))
    // }
}
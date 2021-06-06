import { Company } from "@modules/company/infra/typeorm/entities/Company";
import { User } from "@modules/user/infra/typeorm/entities/User";
import { AfterLoad, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { CategoryTicket } from "./CategoryTicket";
import { Interaction } from "./Interaction";
import { StatusTicket } from "./StatusTicket";

@Entity("tb_ticket")
class Ticket {

    @PrimaryGeneratedColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToOne(type => User, user => user.id)
    @JoinColumn({ name: "id_requester" })
    requester: User

    @Column({ name: "id_requester" })
    idRequester: string;


    @OneToOne(type => StatusTicket, status => status.id)
    @JoinColumn({ name: "id_status" })
    status: StatusTicket

    @Column({ name: "id_status" })
    idStatus: number;

    @OneToOne(type => CategoryTicket, category => category.id)
    @JoinColumn({ name: "id_category" })
    category: CategoryTicket

    @Column({ name: "id_category" })
    idCategory: number;

    @OneToOne(type => Company, company => company.id)
    @JoinColumn({ name: "id_company" })
    company: Company;

    @Column({ name: "id_company" })
    idCompany: number;  
    
    @OneToMany(type => Interaction, interaction => interaction.ticket)
    interactions: Interaction[];
    
    
    @CreateDateColumn()
    created_at: string;
    
    @DeleteDateColumn()
    deleted_at: Date;
    
    @AfterLoad()
    sortAttributes() {
        if (this?.interactions?.length) {
            this.interactions.sort(function(a, b) {
                var dateA = +new Date(a.created_at), dateB = +new Date(b.created_at);
                return dateA - dateB;
            });
        }
    }
}

export { Ticket };
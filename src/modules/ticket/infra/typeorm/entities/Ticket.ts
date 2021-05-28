import { User } from "@modules/user/infra/typeorm/entities/User";
import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import { CategoryTicket } from "./CategoryTicket";
import { StatusTicket } from "./StatusTicket";

@Entity("tb_ticket")
class Ticket{

    @PrimaryColumn()
    readonly id:string;

    @Column()
    title:string;

    @Column()
    description:string;

    @OneToOne(type=>User,user=>user.id)
    @JoinColumn({name:"id_requester"})
    requester:User

    @Column({name:"id_requester"})
    idRequester:string;


    @OneToOne(type=>StatusTicket,status=>status.id)
    @JoinColumn({name:"id_status"})
    status:StatusTicket

    @Column({name:"id_status"})
    idStatus:number;

    @OneToOne(type=>CategoryTicket,category=>category.id)
    @JoinColumn({name:"id_category"})
    category:CategoryTicket

    @Column({name:"id_category"})
    idCategory:number;

    @Column({name:"id_company"})
    idCompany:string;

    @CreateDateColumn()
    created_at:string;

    @DeleteDateColumn()
    deleted_at:Date;
    
}

export{ Ticket };
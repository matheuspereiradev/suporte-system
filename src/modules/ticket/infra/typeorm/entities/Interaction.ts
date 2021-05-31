import { User } from "@modules/user/infra/typeorm/entities/User";
import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn} from "typeorm";
import {v4 as uuid} from 'uuid';
import { Ticket } from "./Ticket";

@Entity("tb_ticket_interaction")
class Interaction{

    @PrimaryColumn()
    readonly id:string;

    @Column({name:"content_text"})
    text:string;

    @Column()
    file:string;

    @ManyToOne(type => Ticket, ticket => ticket.interactions)
    @JoinColumn({name:"id_ticket"})
    ticket: Ticket;

    @Column({name:"id_ticket"})
    idTicket:number;

    @OneToOne(type=>User,user=>user.id)
    @JoinColumn({name:"id_sender"})
    sender:User

    @Column({name:"id_sender"})
    idSender:string;

    @CreateDateColumn()
    created_at:string;

    @DeleteDateColumn()
    deleted_at:Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }

    }
    
}

export{ Interaction };
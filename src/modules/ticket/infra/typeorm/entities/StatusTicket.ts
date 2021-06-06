import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("tb_ticket_status")
class StatusTicket{

    @PrimaryGeneratedColumn()
    readonly id:string;

    @Column()
    name:string;

    @Column()
    icon:string
    
}

export{ StatusTicket };
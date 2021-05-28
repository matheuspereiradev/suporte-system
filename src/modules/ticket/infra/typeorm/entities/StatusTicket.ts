import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity("tb_ticket_status")
class StatusTicket{

    @PrimaryColumn()
    readonly id:string;

    @Column()
    name:string;
    
}

export{StatusTicket};
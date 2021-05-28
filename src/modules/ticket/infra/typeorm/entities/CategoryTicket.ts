import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity("tb_ticket_category")
class CategoryTicket{

    @PrimaryColumn()
    readonly id:string;

    @Column()
    name:string;
    
}

export{ CategoryTicket };
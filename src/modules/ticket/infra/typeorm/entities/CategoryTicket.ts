import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("tb_ticket_category")
class CategoryTicket{

    @PrimaryGeneratedColumn()
    readonly id:string;

    @Column()
    name:string;
    
}

export{ CategoryTicket };
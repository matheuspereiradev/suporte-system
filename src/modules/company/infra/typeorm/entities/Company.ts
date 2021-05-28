import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn} from "typeorm";

@Entity("tb_company")
class Company{

    @PrimaryColumn()
    readonly id:string;

    @Column()
    name:string;
    
    @DeleteDateColumn()
    deleted_at:Date

    @CreateDateColumn()
    created_at:Date
}

export{ Company };
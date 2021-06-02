import { Company } from "@modules/company/infra/typeorm/entities/Company";
import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {v4 as uuid} from 'uuid';

@Entity("tb_user")
class User{

    @PrimaryColumn()
    readonly id:string;

    @Column()
    name:string;

    @Column()
    surname:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    login:string;

    @OneToOne(type=>Company,company=>company.id)
    @JoinColumn({name:"id_company"})
    company:Company;

    @Column({name:"id_company"})
    idCompany:number;

    @Column()
    gender:string;

    @Column()
    admin:boolean;

    @CreateDateColumn()
    created_at:Date;

    @DeleteDateColumn()
    deleted_at:Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }

    }
}

export{User};
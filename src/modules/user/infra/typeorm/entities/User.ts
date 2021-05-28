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

    @Column()
    gender:string;

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
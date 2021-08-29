import { User } from "@modules/user/infra/typeorm/entities/User";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sprint } from "./Sprint";
import { Task } from "./Task";

@Entity("tb_backlog")
class Backlog {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ name: 'id_responsable' })
    idResponsable: string;

    @OneToOne(type => User, user => user.id, {
        eager: true
    })
    @JoinColumn({ name: "id_responsable" })
    responsable: User;

    // @ManyToOne(() => Task, tsk => tsk.isBug)
    // @JoinColumn({ name: "id" })
    // tasks: Task;

    @OneToMany(() => Task, task => task.backlog, {
        eager: true
    })
    @JoinColumn({ name: "id" })
    tasks: Task;

    @ManyToOne(() => Sprint, sprint => sprint.backlogs)
    @JoinColumn({ name: "id_sprint" })
    sprint: Sprint;

    @Column({ name: 'id_sprint' })
    idSprint: number;

    @Column({ name: 'is_open' })
    isOpen: boolean;

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;


}

export { Backlog };

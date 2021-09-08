import { User } from "../../../../user/infra/typeorm/entities/User";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Backlog } from "./Backlog";


@Entity("tb_task")
class Task {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ name: 'is_bug' })
    isBug: boolean;

    @OneToOne(type => User, user => user.id, {
        eager: true
    })
    @JoinColumn({ name: "id_responsable" })
    responsable: User;

    @OneToOne(type => User, user => user.id, {
        eager: true
    })
    @JoinColumn({ name: "created_by" })
    creator: User;

    @Column({ name: 'do_position' })
    doPosition: number;

    @Column({ name: 'created_by' })
    createdBy: string;

    @Column({ name: 'id_responsable' })
    idResponsable: string;

    @Column({ name: 'id_backlog' })
    idBacklog: number;

    @ManyToOne(() => Backlog, back => back.tasks)
    @JoinColumn({ name: "id_backlog" })
    backlog: Backlog;

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;


}

export { Task };

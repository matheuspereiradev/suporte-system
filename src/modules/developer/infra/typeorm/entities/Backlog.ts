import { User } from "@modules/user/infra/typeorm/entities/User";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sprint } from "./Sprint";

@Entity("tb_backlog")
class Backlog {

    @PrimaryGeneratedColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ name: 'id_responsable' })
    idResponsable: string;

    @OneToOne(type => User, user => user.id)
    @JoinColumn({ name: "id_responsable" })
    responsable: User;

    // @OneToOne(type => Sprint, sprint => sprint.id)
    // @JoinColumn({ name: "id_sprint" })
    // sprint: Sprint;

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

import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Backlog } from "./Backlog";

@Entity("tb_sprint")
class Sprint {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    @Column({ name: 'start_date' })
    startDate: Date;

    @Column({ name: 'expected_end_date' })
    expectedEndDate: Date;

    @Column({ name: 'is_open' })
    isOpen: boolean;

    // @OneToOne(type => User, user => user.id)
    // @JoinColumn({ name: "id_responsable" })
    // responsable: User;


    @OneToMany(() => Backlog, back => back.sprint)
    @JoinColumn({ name: "id" })
    backlogs: Backlog[];

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;


}

export { Sprint };

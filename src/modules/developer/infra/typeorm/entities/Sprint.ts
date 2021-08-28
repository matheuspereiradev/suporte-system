import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tb_sprint")
class Sprint {

    @PrimaryGeneratedColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column({ name: 'start_date' })
    startDate: Date;

    @Column({ name: 'expected_end_date' })
    expectedEndDate: Date;

    @Column({ name: 'is_open' })
    isOpen: boolean;

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;


}

export { Sprint };

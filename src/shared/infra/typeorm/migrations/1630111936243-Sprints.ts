import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Sprints1630111936243 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tb_sprint",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "45"
                },
                {
                    name: "start_date",
                    type: "timestamp",
                    isNullable: true
                },
                {
                    name: "expected_end_date",
                    type: "timestamp",
                    isNullable: true
                },
                {
                    name: "is_open",
                    type: "tinyint",
                    default: 1
                },
                {
                    name: "deleted_at",
                    type: "timestamp",
                    isNullable: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("tb_sprint");
    }

}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableBacklog1630173169126 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tb_backlog",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "title",
                    type: "varchar",
                    length: "140"
                },
                {
                    name: "description",
                    type: "text",
                    isNullable: true
                },
                {
                    name: "is_open",
                    type: "tinyint",
                    default: 1
                },
                {
                    name: "id_responsable",
                    type: "varchar",
                    length: "100"
                },
                {
                    name: "id_sprint",
                    type: "int"
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
            ],
            foreignKeys: [
                {
                    name: "fk_user_sprint",
                    referencedTableName: "tb_user",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_responsable"],
                    onUpdate: "CASCADE"
                },
                {
                    name: "fk_backlog_sprint",
                    referencedTableName: "tb_sprint",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_sprint"],
                    onUpdate: "CASCADE"
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("tb_backlog");
    }


}

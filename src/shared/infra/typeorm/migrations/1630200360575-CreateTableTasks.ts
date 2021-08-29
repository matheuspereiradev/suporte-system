import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableTasks1630200360575 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tb_task",
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
                    name: "is_bug",
                    type: "tinyint",
                    default: 0
                },
                {
                    name: "do_position",
                    type: "int",
                    default: 1
                },
                {
                    name: "id_responsable",
                    type: "varchar",
                    length: "100"
                },
                {
                    name: "id_backlog",
                    type: "int"
                },
                {
                    name: "created_by",
                    type: "varchar",
                    length: "100"
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
                    name: "fk_user_task",
                    referencedTableName: "tb_user",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_responsable"],
                    onUpdate: "CASCADE"
                },
                {
                    name: "fk_usercreate_task",
                    referencedTableName: "tb_user",
                    referencedColumnNames: ["id"],
                    columnNames: ["created_by"],
                    onUpdate: "CASCADE"
                },
                {
                    name: "fk_backlog_task",
                    referencedTableName: "tb_backlog",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_backlog"],
                    onUpdate: "CASCADE"
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("tb_backlog");
    }



}

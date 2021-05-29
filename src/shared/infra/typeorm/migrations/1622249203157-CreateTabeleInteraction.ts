import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTabeleInteraction1622249203157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"tb_ticket_interaction",
            columns:[
                {
                    name:"id",
                    type:"varchar",
                    length:"40",
                    isPrimary:true,
                    isUnique: true
                },
                {
                    name:"content_text",
                    type:"text"
                },
                {
                    name:"file",
                    type:"varchar",
                    length:"50"
                },
                {
                    name:"id_ticket",
                    type:"int"
                },
                {
                    name:"id_sender",
                    type:"varchar",
                    length:"40"
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"CURRENT_TIMESTAMP"
                },
                {
                    name:"deleted_at",
                    type:"timestamp",
                    isNullable:true
                }
        ],
        foreignKeys:[
            {
                name:"fk_interaction_ticket",
                referencedTableName:"tb_ticket",
                referencedColumnNames:["id"],
                columnNames:["id_ticket"],
                onUpdate:"CASCADE"
            },
            {
                name:"fk_interaction_user",
                referencedTableName:"tb_user",
                referencedColumnNames:["id"],
                columnNames:["id_sender"],
                onUpdate:"CASCADE"
            }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("tb_ticket_interaction");
    }
}

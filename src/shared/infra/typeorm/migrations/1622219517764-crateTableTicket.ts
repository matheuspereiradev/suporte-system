import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class crateTableTicket1622219517764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"tb_ticket",
            columns:[
                {
                    name:"id",
                    type:"int",
                    isPrimary:true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name:"titulo",
                    type:"varchar",
                    length:"100"
                },
                {
                    name:"description",
                    type:"text"
                },
                {
                    name:"id_requester",
                    type:"varchar",
                    length:"40"
                },
                {
                    name:"id_company",
                    type:"int"
                },
                {
                    name:"id_status",
                    type:"int"
                },
                {
                    name:"id_category",
                    type:"int"
                },
                {
                    name:"deleted_at",
                    type:"timestamp",
                    isNullable:true
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"CURRENT_TIMESTAMP"
                }
        ],
        foreignKeys:[
            {
                name:"fk_ticket_user",
                referencedTableName:"tb_user",
                referencedColumnNames:["id"],
                columnNames:["id_requester"],
                onUpdate:"CASCADE"
            },
            {
                name:"fk_ticket_company",
                referencedTableName:"tb_company",
                referencedColumnNames:["id"],
                columnNames:["id_company"],
                onUpdate:"CASCADE"
            },
            {
                name:"fk_ticket_status",
                referencedTableName:"tb_ticket_status",
                referencedColumnNames:["id"],
                columnNames:["id_status"],
                onUpdate:"CASCADE"
            },
            {
                name:"fk_ticket_category",
                referencedTableName:"tb_ticket_category",
                referencedColumnNames:["id"],
                columnNames:["id_category"],
                onUpdate:"CASCADE"
            }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("tb_ticket");
    }

}

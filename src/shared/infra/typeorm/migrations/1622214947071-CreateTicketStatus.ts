import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTicketStatus1622214947071 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"tb_ticket_status",
            columns:[
                {
                    name:"id",
                    type:"int",
                    isPrimary:true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name:"name",
                    type:"varchar",
                    length:"100"
                }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("tb_ticket_status");
    }

}

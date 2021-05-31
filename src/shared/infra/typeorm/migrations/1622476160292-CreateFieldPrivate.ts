import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateFieldPrivate1622476160292 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_ticket_interaction",new TableColumn(
            {
                name:"private",
                type:"TINYINT",
                default:0
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_ticket_interaction","private")
    }

}

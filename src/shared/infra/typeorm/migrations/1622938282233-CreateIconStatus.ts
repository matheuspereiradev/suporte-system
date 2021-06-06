import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateIconStatus1622938282233 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_ticket_status",new TableColumn(
            {
                name:"icon",
                type:"varchar(30)",
                isNullable:true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_ticket_status","icon")
    }

}

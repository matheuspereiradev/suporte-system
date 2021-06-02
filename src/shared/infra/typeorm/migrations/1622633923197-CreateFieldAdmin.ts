import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateFieldAdmin1622633923197 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_user",new TableColumn(
            {
                name:"admin",
                type:"TINYINT",
                default:0
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_user","admin")
    }

}

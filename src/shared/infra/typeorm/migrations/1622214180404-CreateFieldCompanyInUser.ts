import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateFieldCompanyInUser1622214180404 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_user",new TableColumn(
            {
                name:"id_company",
                type:"int",
                isNullable:true
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_user","id_company")
    }

}

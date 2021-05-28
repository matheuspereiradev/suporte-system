import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateFKCompanyUser1622214292926 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("tb_user",new TableForeignKey({
            
            name:"fk_user_company",
            referencedTableName:"tb_company",
            referencedColumnNames:["id"],
            columnNames:["id_company"],
            onUpdate:"CASCADE"
        
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("tb_user","fk_user_company")
    }

}

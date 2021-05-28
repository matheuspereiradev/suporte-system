import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableCOmpany1622213669706 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"tb_company",
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
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("tb_company");
    }

}

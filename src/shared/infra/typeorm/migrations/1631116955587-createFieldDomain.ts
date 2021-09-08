import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class createFieldDomain1631116955587 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_backlog", new TableColumn(
            {
                name: "domain",
                type: "varchar",
                length: "45"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_backlog", "domain")
    }

}

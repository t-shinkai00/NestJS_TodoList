import {MigrationInterface, QueryRunner} from "typeorm";

export class createTask1653758854594 implements MigrationInterface {
    name = 'createTask1653758854594'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`task\` (\`task_id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(20) NOT NULL, \`due_date\` date NOT NULL, \`status\` tinyint(1) NOT NULL DEFAULT '1', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`task_id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`task\``);
    }

}

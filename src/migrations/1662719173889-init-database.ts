import { MigrationInterface, QueryRunner } from "typeorm"

export class initDatabase1662719173889 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (
            \`id\` int NOT NULL AUTO_INCREMENT,
            \`full_name\` varchar(255) NOT NULL,
            \`username\` varchar(255) NOT NULL UNIQUE,
            \`password\` varchar(255) NOT NULL,
            \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            \`updated_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB;`)

            await queryRunner.query(`CREATE TABLE \`services\` (
                \`id\` varchar(255) NOT NULL,
                \`name\` varchar(255) NOT NULL,
                \`price\` double NOT NULL,
                \`picture\` varchar(255) NOT NULL,
                \`description\` varchar(255) NOT NULL,
                \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
                \`updated_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (\`id\`)
                ) ENGINE=InnoDB;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``)
        await queryRunner.query(`DROP TABLE \`services\``)
    }

}

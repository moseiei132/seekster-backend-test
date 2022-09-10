import { MigrationInterface, QueryRunner } from "typeorm"

export class initDatabase1662719173889 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (
                \`id\` varchar(255) NOT NULL,
                \`full_name\` varchar(255) NOT NULL,
                \`username\` varchar(255) NOT NULL UNIQUE,
                \`password\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`)
                ) ENGINE=InnoDB;`)

        await queryRunner.query(`CREATE TABLE \`services\` (
                \`id\` varchar(255) NOT NULL,
                \`name\` varchar(255) NOT NULL,
                \`price\` double NOT NULL,
                \`picture\` varchar(255) NOT NULL,
                \`description\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`)
                ) ENGINE=InnoDB;`)

        await queryRunner.query(`CREATE TABLE \`refresh_tokens\` (
                \`id\` varchar(255) NOT NULL,
                \`user_id\` int NOT NULL,
                \`token\` varchar(2048) NOT NULL,
                \`expires_at\` datetime NOT NULL,
                \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
                \`updated_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (\`id\`)
                ) ENGINE=InnoDB;`)

        await queryRunner.query(`CREATE TABLE \`services_bookings\` (
                \`id\` varchar(255) NOT NULL,
                \`user_id\` varchar(255) NOT NULL,
                \`service_id\` varchar(255) NOT NULL,
                \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (\`id\`)
                ) ENGINE=InnoDB;`)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``)
        await queryRunner.query(`DROP TABLE \`services\``)
        await queryRunner.query(`DROP TABLE \`refresh_tokens\``)
        await queryRunner.query(`DROP TABLE \`services_bookings\``)
    }

}

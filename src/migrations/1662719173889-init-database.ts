import { MigrationInterface, QueryRunner } from "typeorm"

export class initDatabase1662719173889 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (
                \`id\` varchar(36) NOT NULL,
                \`full_name\` varchar(255) NOT NULL,
                \`username\` varchar(255) NOT NULL UNIQUE,
                \`password\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`)
                ) ENGINE=InnoDB;`)

        await queryRunner.query(`CREATE TABLE \`services\` (
                \`id\` varchar(36) NOT NULL,
                \`name\` varchar(255) NOT NULL,
                \`price\` int NOT NULL,
                \`picture\` varchar(255) NOT NULL,
                \`description\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`)
                ) ENGINE=InnoDB;`)

        await queryRunner.query(`CREATE TABLE \`refresh_tokens\` (
                \`id\` varchar(36) NOT NULL,
                \`user_id\` varchar(36) NOT NULL,
                \`token\` varchar(2048) NOT NULL,
                \`expires_at\` datetime NOT NULL,
                \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
                \`updated_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (\`id\`)
                ) ENGINE=InnoDB;`)

        await queryRunner.query(`CREATE TABLE \`services_bookings\` (
                \`id\` varchar(36) NOT NULL,
                \`user_id\` varchar(36) NOT NULL,
                \`service_id\` varchar(36) NOT NULL,
                \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (\`id\`),
                FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`),
                FOREIGN KEY (\`service_id\`) REFERENCES \`services\`(\`id\`)
                ) ENGINE=InnoDB;`)

        await queryRunner.query(`INSERT INTO services (id, name, price, picture, description) VALUES ('a001', 'test service 1', 1000, 'https://i.picsum.photos/id/863/200/200.jpg?hmac=b2PqP--PkLWi3zKCrto-MSpLXkrtt4kYpKbUkZa2Yjo', 'test service 1')`)
        await queryRunner.query(`INSERT INTO services (id, name, price, picture, description) VALUES ('a002', 'test service 2', 2000, 'https://i.picsum.photos/id/9/200/200.jpg?hmac=KeGvZtsfErXTVxRSy5Kev3vLnJBdBYcYoGviv8RE5Vk', 'test service 2')`)
        await queryRunner.query(`INSERT INTO services (id, name, price, picture, description) VALUES ('a003', 'test service 3', 3000, 'https://i.picsum.photos/id/823/200/200.jpg?hmac=zD0Ti1kYqMOUsfNVS7xtDou-2ECcI0RXYs18C54EdYo', 'test service 3')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`services_bookings\``)
        await queryRunner.query(`DROP TABLE \`users\``)
        await queryRunner.query(`DROP TABLE \`services\``)
        await queryRunner.query(`DROP TABLE \`refresh_tokens\``)
    }

}

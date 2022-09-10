import "reflect-metadata"
import { DataSource } from "typeorm"
import { DB_CONFIG } from './config/env'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_CONFIG.DB_HOST,
    port: DB_CONFIG.DB_PORT,
    username: DB_CONFIG.DB_USER,
    password: DB_CONFIG.DB_PASS,
    database: DB_CONFIG.DB_NAME,
    synchronize: true,
    logging: false,
    entities: ['src/entities/**/*.ts'],
    migrations: ['src/migrations/*.ts'],
    subscribers: [],
    extra: { insecureAuth: true },
    timezone: '+07:00',
})

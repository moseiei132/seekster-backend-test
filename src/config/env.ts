import * as dotenv from 'dotenv';
dotenv.config();

export const DB_CONFIG = {
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: parseInt(process.env.DB_PORT) || 3306,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS
}


export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const EXPRESS_CONFIG = {
    PORT: parseInt(process.env.PORT) || 3000,
    HOST: process.env.HOST || 'localhost'
};
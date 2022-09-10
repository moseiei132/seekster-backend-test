import { body } from 'express-validator';

export const loginValidator = [
    body('username').exists().isString().isLength({ min: 3, max: 20 }),
    body('password').exists().isString().isLength({ min: 6, max: 20 }),
];

export const registerValidator = [
    body('fullName').exists().isString().isLength({ min: 3, max: 255 }),
    body('username').exists().isString().isLength({ min: 3, max: 20 }),
    body('password').exists().isString().isLength({ min: 6, max: 20 }),
];
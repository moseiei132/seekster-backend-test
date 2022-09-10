import { NextFunction, Request, Response } from 'express';
import { ValidationChain, validationResult } from 'express-validator';
import { errorMessage } from '../constants/message';

export const executeValidator = (validator: ValidationChain[]) => async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validator.map((rule) => rule.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            message: errorMessage.VALIDATION_ERROR,
            errors: errors.array(),
        });
    }

    next();
};
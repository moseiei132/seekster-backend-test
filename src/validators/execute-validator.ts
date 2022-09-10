import { NextFunction, Request, Response } from 'express';
import { ValidationChain, validationResult } from 'express-validator';

export const executeValidator = (validator: ValidationChain[]) => async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validator.map((rule) => rule.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            message: 'Validation failed',
            errors: errors.array(),
        });
    }

    next();
};
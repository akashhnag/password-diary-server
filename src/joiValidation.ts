import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

// eslint-disable-next-line max-len
const joiValidation = (schema: ObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await schema.validate(req.body);
    if (Object.prototype.hasOwnProperty.call(result, 'error')) {
      const errorMessage = result.error?.details[0].message;
      return res.status(400).json({ error: 'Invalid request', message: errorMessage });
    }
    next();
  } catch (err: any) {
    console.log('Error validating request:', err);
  }
};

export default joiValidation;

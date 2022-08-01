import express, { Request, Response } from 'express';
import userRegister from './user';
import joiValidation from '../../joiValidation';
import userRegistrationSchema from './schema';

const userRouter = express.Router();

userRouter.post('/register', joiValidation(userRegistrationSchema), async (req: Request, res: Response) => {
  try {
    const result = await userRegister(req.body);
    res.json({ message: result });
  } catch (err: any) {
    res.json({ error: err.message });
  }
});

export default userRouter;

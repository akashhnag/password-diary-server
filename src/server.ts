import express, { Express } from 'express';
import dotenv from 'dotenv';
import init from './loader';
import userRouter from './components/user/route';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(userRouter);

init();

export default app;

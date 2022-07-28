import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const { PORT } = process.env;

const app: Express = express();

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}..`);
});

import express from 'express';
import dontenv from 'dotenv';
import setupMiddleware from './middleware';
import setupRoutest from './routes';

dontenv.config();
const app = express();
setupMiddleware(app);
setupRoutest(app);

export default app;

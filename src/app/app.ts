import express from 'express';
import { errorHandler } from './errors/error-handler.js';
import { routes } from '../routes/index.js';

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorHandler);

export { app };

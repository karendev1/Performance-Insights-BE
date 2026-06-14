import { Router } from 'express';
import { analysisRoutes } from './analysis.routes';

const routes = Router();

routes.use('/analysis', analysisRoutes);

export { routes };

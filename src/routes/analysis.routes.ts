import { Router } from 'express';
import { PageSpeedClient } from '../infrastructure/external/pagespeed/PageSpeedClient';
import { AnalysisService } from '../modules/analysis/service/AnalysisService';
import { AnalysisController } from '../modules/analysis/controller/AnalysisController';

const analysisRoutes = Router();

const pageSpeedClient = new PageSpeedClient();

const analysisService = new AnalysisService(pageSpeedClient);

const analysisController = new AnalysisController(analysisService);

analysisRoutes.post('/', analysisController.create.bind(analysisController));

export { analysisRoutes };

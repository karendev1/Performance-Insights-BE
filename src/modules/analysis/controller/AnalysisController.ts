import { Request, Response } from 'express';

import { createAnalysisSchema } from '../schemas/CreateAnalysisSchema.js';
import { AnalysisService } from '../service/AnalysisService.js';

export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { url } = createAnalysisSchema.parse(request.body);

    const result = await this.analysisService.execute(url);

    return response.status(200).json({
      success: true,
      data: result,
    });
  }
}

import { PageSpeedClient } from '../../../infrastructure/external/pagespeed/PageSpeedClient.js';
import { AnalysisMapper } from '../mappers/AnalysisMapper.js';

export class AnalysisService {
  constructor(private readonly pageSpeedClient: PageSpeedClient) {}

  async execute(url: string) {
    const result = await this.pageSpeedClient.analyze(url);

    return AnalysisMapper.toDto(result);
  }
}

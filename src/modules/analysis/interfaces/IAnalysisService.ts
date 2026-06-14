import { PageSpeedResponse } from '../../../shared/types/PageSpeedResponse';

export interface IAnalysisService {
  execute(url: string): Promise<PageSpeedResponse>;
}

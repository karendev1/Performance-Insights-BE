import { CoreWebVitalsDto } from './CoreWebVitalsDto';
import { OpportunityDto } from './OportunityDto';

export interface AnalysisResultDto {
  performance: number;
  accessibility: number;
  seo: number;
  bestPractices: number;
  coreWebVitals: CoreWebVitalsDto;
  opportunities: OpportunityDto[];
}

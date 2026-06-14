import { PageSpeedResponse } from '../../../shared/types/PageSpeedResponse.js';
import { AnalysisResultDto } from '../dto/AnalysisResultDto.js';

export class AnalysisMapper {
  static toDto(result: PageSpeedResponse): AnalysisResultDto {
    return {
      performance: Math.round(result.lighthouseResult.categories.performance.score * 100),

      accessibility: Math.round(result.lighthouseResult.categories.accessibility.score * 100),

      seo: Math.round(result.lighthouseResult.categories.seo.score * 100),

      bestPractices: Math.round(result.lighthouseResult.categories['best-practices'].score * 100),

      coreWebVitals: {
        fcp: result.lighthouseResult.audits['first-contentful-paint'].displayValue,

        lcp: result.lighthouseResult.audits['largest-contentful-paint'].displayValue,

        speedIndex: result.lighthouseResult.audits['speed-index'].displayValue,

        tbt: result.lighthouseResult.audits['total-blocking-time'].displayValue,

        cls: result.lighthouseResult.audits['cumulative-layout-shift'].displayValue,
      },

      opportunities: [],
    };
  }
}

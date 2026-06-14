export interface CategoryScore {
  score: number;
}

export interface AuditMetric {
  title: string;
  description?: string;
  displayValue: string;
  score?: number;
  numericValue?: number;
}

export interface PageSpeedResponse {
  lighthouseResult: {
    categories: {
      performance: CategoryScore;
      accessibility: CategoryScore;
      seo: CategoryScore;
      'best-practices': CategoryScore;
    };

    audits: Record<string, AuditMetric>;
  };
}

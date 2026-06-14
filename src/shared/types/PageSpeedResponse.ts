export interface PageSpeedResponse {
  lighthouseResult: {
    categories: {
      performance: CategoryScore;
      accessibility: CategoryScore;
      seo: CategoryScore;
      'best-practices': CategoryScore;
    };

    audits: {
      'first-contentful-paint': AuditMetric;
      'largest-contentful-paint': AuditMetric;
      'speed-index': AuditMetric;
      'total-blocking-time': AuditMetric;
      'cumulative-layout-shift': AuditMetric;
    };
  };
}

export interface CategoryScore {
  score: number;
}

export interface AuditMetric {
  title: string;
  displayValue: string;
  numericValue?: number;
}

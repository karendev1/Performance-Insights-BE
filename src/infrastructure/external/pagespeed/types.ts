export interface PageSpeedResponse {
  lighthouseResult: {
    categories: {
      performance: {
        score: number;
      };
    };
  };
}

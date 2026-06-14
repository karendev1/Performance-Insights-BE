import axios, { AxiosInstance } from 'axios';
import { AppError } from '../../../app/errors/AppError';
import { PageSpeedResponse } from '../../../shared/types/PageSpeedResponse';

export class PageSpeedClient {
  private readonly http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: process.env.PAGESPEED_BASE_URL,
      timeout: 15000,
    });
  }

  async analyze(url: string): Promise<PageSpeedResponse> {
    try {
      const response = await this.http.get('', {
        params: {
          url,
          key: process.env.PAGESPEED_API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw error;
      }

      if (error.code === 'ECONNABORTED') {
        throw new AppError('PageSpeed request timeout', 504);
      }

      if (!error.response) {
        throw new AppError('PageSpeed service is unavailable', 502);
      }

      switch (error.response.status) {
        case 400:
          throw new AppError('Invalid URL provided', 400);

        case 401:
        case 403:
          throw new AppError('PageSpeed authentication failed', 502);

        default:
          throw new AppError('Failed to execute PageSpeed analysis', 502, {
            provider: 'Google PageSpeed',
            status: error.response.status,
          });
      }
    }
  }
}

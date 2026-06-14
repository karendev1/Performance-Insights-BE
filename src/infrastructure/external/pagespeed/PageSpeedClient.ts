import axios, { AxiosInstance } from 'axios';
import { AppError } from '../../../app/errors/AppError';

export class PageSpeedClient {
  private readonly http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: process.env.PAGESPEED_BASE_URL,
      timeout: 15000,
    });
  }

  async analyze(url: string) {
    try {
      const response = await this.http.get('', {
        params: {
          url,
          key: process.env.PAGESPEED_API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new AppError('Failed to execute PageSpeed analysis', 502, {
          originalMessage: error.message,
        });
      }

      throw error;
    }
  }
}

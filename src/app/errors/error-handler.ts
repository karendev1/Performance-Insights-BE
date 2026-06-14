import { Request, Response } from 'express';
import { AppError } from './AppError.js';
import { logger } from '../../config/logger.js';

export function errorHandler(error: Error, _request: Request, response: Response): Response {
  if (error instanceof AppError) {
    logger.warn({
      message: error.message,
      statusCode: error.statusCode,
      details: error.details,
    });

    return response.status(error.statusCode).json({
      success: false,
      message: error.message,
      details: error.details,
    });
  }

  logger.error(error);

  return response.status(500).json({
    success: false,
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && {
      stack: error.stack,
    }),
  });
}

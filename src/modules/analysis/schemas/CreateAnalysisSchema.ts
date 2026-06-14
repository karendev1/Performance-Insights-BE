import { z } from 'zod';

export const createAnalysisSchema = z.object({
  url: z.string().trim().url('Invalid URL'),
});

export type CreateAnalysisDto = z.infer<typeof createAnalysisSchema>;

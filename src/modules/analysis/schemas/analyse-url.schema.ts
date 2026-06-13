import { z } from 'zod';

export const analyzeUrlSchema = z.object({
  url: z.url(),
});

export type AnalyzeUrlInput = z.infer<typeof analyzeUrlSchema>;

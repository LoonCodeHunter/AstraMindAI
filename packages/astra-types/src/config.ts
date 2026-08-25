import { z } from "zod";

export const AstraConfigSchema = z.object({
  apiKey: z.string().min(1),
  model: z.string(),
  enableLogging: z.boolean().default(true)
});

export type AstraConfig = z.infer<typeof AstraConfigSchema>;

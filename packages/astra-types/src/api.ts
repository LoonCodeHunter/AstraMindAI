import { z } from "zod";

export const APIRequestSchema = z.object({
  model: z.string(),
  messages: z.array(z.object({
    role: z.string(),
    content: z.string()
  }))
});

export type APIRequest = z.infer<typeof APIRequestSchema>;

export const APIResponseSchema = z.object({
  id: z.string(),
  created: z.number(),
  content: z.string()
});

export type APIResponse = z.infer<typeof APIResponseSchema>;

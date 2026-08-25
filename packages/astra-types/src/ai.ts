import { z } from "zod";

export const AIMessageSchema = z.object({
  id: z.string(),
  role: z.enum(["user", "assistant", "system"]),
  content: z.string(),
  timestamp: z.number()
});

export type AIMessage = z.infer<typeof AIMessageSchema>;

export const AIModelSchema = z.enum([
  "astramind-pro",
  "astramind-lite",
  "astramind-coder"
]);

export type AIModel = z.infer<typeof AIModelSchema>;

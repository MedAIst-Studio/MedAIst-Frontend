import z from "zod";

export const chatsResponseSchema = z.array(
  z.object({
    id: z.string(),
    title: z.string().nullable(),
    created_at: z.string(),
  }),
);

export const messagesResponseSchema = z.array(
  z.object({
    content: z.string(),
    is_user: z.boolean(),
    timestamp: z.date(),
  }),
);

export const messageRequestSchema = z.object({
  chat_id: z.string().optional(),
  pdf_id: z.string(),
  content: z.string(),
});

export const messageResponseSchema = z.object({
  ai_message_id: z.string(),
  ai_response: z.string(),
  chat_id: z.string(),
  title: z.string(),
  user_message_id: z.string(),
});

export type Chat = z.infer<typeof chatsResponseSchema.element>;
export type Message = z.infer<typeof messagesResponseSchema.element>;
export type UserMessage = z.infer<typeof messageRequestSchema>;
export type AIMessage = z.infer<typeof messageResponseSchema>;

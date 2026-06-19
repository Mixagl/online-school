import z from "zod";

export const createPostSchema = z.object({
  title: z.string().min(5, "Минимум 5 символов"),
  slug: z.string().min(3, "Минимум 3 символа"),
  description: z.string().optional().nullable(),
  content: z.string().min(10, "Минимум 10 символов"),
  category: z.enum(["tutorial", "updates", "news"], {
    message: "Выберите корректную категорию",
  }),
});

export type CreatePostSchemaType = z.infer<typeof createPostSchema>;

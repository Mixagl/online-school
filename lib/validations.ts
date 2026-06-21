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

export const createCourseSchema = z.object({
  title: z.string().min(5, "Минимум 5 символов"),
  slug: z.string().min(3, "Минимум 3 символа"),
  description: z.string().optional(),
  image: z.string().optional(),
  price: z.number().min(0, "Цена не может быть отрицательной"),
});

export type CreateCourseSchemaType = z.infer<typeof createCourseSchema>;

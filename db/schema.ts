import { integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const categoriesEnum = pgEnum("categories", [
  "tutorial",
  "updates",
  "news",
]);

export const posts = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: text().notNull(),
  slug: text().notNull().unique(),
  description: text(),
  content: text().notNull(),
  category: categoriesEnum().notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});

export const postSchema = createSelectSchema(posts);

export const insertPostSchema = createInsertSchema(posts, {
  title: (schema) => schema.min(5, "Минимум 5 символов"),
  content: (schema) => schema.min(10, "Минимум 10 символов"),
  slug: (schema) => schema.min(3, "Минимум 3 символа"),
});

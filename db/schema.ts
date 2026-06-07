import { integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

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

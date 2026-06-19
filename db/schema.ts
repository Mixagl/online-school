import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

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
  authorId: text("author_id"),
});

export const courses = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: text().notNull(),
  slug: text().notNull().unique(),
  description: text(),
  image: text(),
  price: integer().notNull().default(0),
});

export const lessons = pgTable("lessons", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: text().notNull(),
  content: text().notNull().default(""),
  videoUrl: text("video_url"),
  order: integer().notNull().default(0),
  courseId: integer("course_id")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  isFree: boolean("is_free").default(false),
});

export const coursesRelations = relations(courses, ({ many }) => ({
  lessons: many(lessons),
}));

export const lessonsRelations = relations(lessons, ({ one }) => ({
  course: one(courses, {
    fields: [lessons.courseId],
    references: [courses.id],
  }),
}));

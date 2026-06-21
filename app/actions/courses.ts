"use server";

import { db } from "@/db";
import { courses, lessons } from "@/db/schema";
import { createCourseSchema, CreateCourseSchemaType } from "@/lib/validations";
import { asc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function getCourses() {
  const courses = await db.query.courses.findMany();
  return courses;
}

export async function getCourseBySlug(slug: string) {
  const course = await db.query.courses.findFirst({
    where: eq(courses.slug, slug),
    with: {
      lessons: {
        orderBy: (lessons, { asc }) => asc(lessons.order),
      },
    },
  });

  if (!course) return null;

  return course;
}

export async function createCourse(formData: FormData) {
  try {
    const raw: CreateCourseSchemaType = {
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      description: formData.get("description") as string,
      image: formData.get("image") as string,
      price: Number(formData.get("price")) as number,
    };
    const validated = createCourseSchema.parse(raw);
    await db.insert(courses).values(validated);
    revalidatePath("/courses");
    return { success: true };
  } catch {
    return { success: false, error: "Ошибка создания курса" };
  }
}

export async function updateCourse(id: number, formData: FormData) {
  try {
    const raw: CreateCourseSchemaType = {
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      description: formData.get("description") as string,
      image: formData.get("image") as string,
      price: Number(formData.get("price")) as number,
    };

    const validated = createCourseSchema.parse(raw);

    await db.update(courses).set(validated).where(eq(courses.id, id));
    revalidatePath("/courses");
    return { success: true };
  } catch {
    return { success: false, error: "Ошибка обновления курса" };
  }
}

export async function deleteCourse(id: number) {
  try {
    await db.delete(courses).where(eq(courses.id, id));
    revalidatePath("/courses");
    return { success: true };
  } catch {
    return { success: false, error: "Ошибка удаления курса" };
  }
}

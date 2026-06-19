"use server";

import { db } from "@/db";
import { posts } from "@/db/schema";
import { auth } from "@/lib/auth";
import { createPostSchema } from "@/lib/validations";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function getPosts() {
  const posts = await db.query.posts.findMany();
  const postsWithAuthors = await Promise.all(
    posts.map(async (post) => {
      const result = await db.execute(
        `SELECT name FROM "user" WHERE id = '${post.authorId}'`,
      );
      return {
        ...post,
        authorName: result.rows[0]?.name as string,
      };
    }),
  );

  return postsWithAuthors;
}

export async function getPostBySlug(slug: string) {
  const post = await db.query.posts.findFirst({
    where: eq(posts.slug, slug),
  });

  if (!post) return null;

  const result = await db.execute(
    `SELECT name FROM "user" WHERE id = '${post.authorId}'`,
  );

  const authorName = result.rows[0]?.name as string;

  return { ...post, authorName };
}

export async function createPost(formData: FormData) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const raw = {
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      description: formData.get("description") as string,
      content: formData.get("content") as string,
      category: formData.get("category") as string,
    };

    const validated = createPostSchema.parse(raw);

    await db.insert(posts).values({ ...validated, authorId: session?.user.id });
    revalidatePath("/blog");
    return { success: true };
  } catch {
    return { success: false, error: "Ошибка создания поста" };
  }
}

export async function updatePost(id: number, formData: FormData) {
  try {
    const raw = {
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      description: formData.get("description") as string,
      content: formData.get("content") as string,
      category: formData.get("category") as string,
    };

    const validated = createPostSchema.parse(raw);

    await db
      .update(posts)
      .set({ ...validated, updatedAt: new Date() })
      .where(eq(posts.id, id));
    revalidatePath("/blog");
    revalidatePath(`/blog/${validated.slug}`);
    return { success: true };
  } catch {
    return { success: false, error: "Ошибка обновления поста" };
  }
}

export async function deletePost(id: number) {
  try {
    await db.delete(posts).where(eq(posts.id, id));
    revalidatePath("/blog");
    return { success: true };
  } catch {
    return { success: false, error: "Ошибка удаления поста" };
  }
}

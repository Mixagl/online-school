import PostForm from "@/app/admin/post-form";
import { db } from "@/db";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await db.query.posts.findFirst({
    where: eq(posts.id, Number(id)),
  });

  if (!post) notFound();

  return (
    <section className="w-full bg-background pt-32 pb-32">
      <div className="mx-auto container px-5 max-w-2xl">
        <PostForm post={post} />
      </div>
    </section>
  );
}

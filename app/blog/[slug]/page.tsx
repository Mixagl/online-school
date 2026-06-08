import { getPostBySlug } from "@/app/actions/posts";
import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="w-full bg-background pt-32 pb-32">
      <div className="mx-auto container px-5 flex flex-col items-start gap-10 max-w-200">
        <div className="flex flex-col gap-5 items-start">
          <div className="flex gap-1 items-center">
            <Badge variant="default" className="w-fit">
              {post.category}
            </Badge>
            <Dot className="text-muted-foreground" />
            <time className="text-base text-muted-foreground">
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString("ru-RU")
                : "—"}
            </time>
          </div>
          <h2 className="text-foreground text-4xl font-bold">{post.title}</h2>
          <p className="text-muted-foreground text-base">{post.description}</p>
        </div>
        <div className="text-lg text-foreground max-w-none">{post.content}</div>
      </div>
    </section>
  );
}

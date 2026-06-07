import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPosts } from "../actions/posts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <section className="w-full bg-background pt-50 pb-50">
      <div className="mx-auto container px-5 flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-foreground text-center">
            Свежие статьи о разработке
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto">
            Мысли, руководства и лайфхаки из мира фронтенда, бэкенда и
            архитектуры приложений.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          {posts.map((post) => (
            <Card key={post.id} className="w-full max-w-2xl">
              <CardHeader className="flex flex-col gap-3">
                <time className="text-sm text-muted-foreground">
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString("ru-RU")
                    : "—"}
                </time>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
                <Badge variant="secondary" className="w-fit mb-2">
                  {post.category}
                </Badge>
              </CardHeader>
              <CardFooter>
                <Button asChild>
                  <Link href={`/blog/${post.slug}`}>Читать</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

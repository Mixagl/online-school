import DeletePostDialog from "@/components/admin/DeletePostDialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/db";
import Link from "next/link";

export default async function Page() {
  const posts = await db.query.posts.findMany();

  return (
    <section className="w-full bg-background pt-32 pb-32">
      <div className="mx-auto container px-5 flex flex-col gap-10">
        <div className="flex flex-col gap-5 items-start">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-foreground text-center">
            Управление постами
          </h2>
          <Button asChild>
            <Link href={"/admin/posts/new"}>Создать пост</Link>
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Заголовок</TableHead>
              <TableHead>Категория</TableHead>
              <TableHead>Дата</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString("ru-RU")
                    : "—"}
                </TableCell>
                <TableCell className="flex gap-3">
                  <Button asChild>
                    <Link href={`/admin/posts/${post.id}/edit`}>
                      Редактировать
                    </Link>
                  </Button>
                  <DeletePostDialog id={post.id}></DeletePostDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

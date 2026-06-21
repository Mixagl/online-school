import { getCourses } from "@/app/actions/courses";
import DeleteDialog from "@/components/admin/DeletePostDialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default async function Page() {
  const courses = await getCourses();

  return (
    <section className="w-full bg-background pt-32 pb-32">
      <div className="mx-auto container px-5 flex flex-col gap-10">
        <div className="flex flex-col gap-5 items-start">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-foreground text-center">
            Управление курсами
          </h2>
          <Button asChild>
            <Link href={"/admin/courses/new"}>Добавить курс</Link>
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Название</TableHead>
              <TableHead>Цена</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.title}</TableCell>
                <TableCell>
                  {course.price === 0 ? "Бесплатно" : course.price}
                </TableCell>
                <TableCell className="flex gap-3">
                  <Button asChild>
                    <Link href={`/admin/courses/${course.slug}/edit`}>
                      Редактировать
                    </Link>
                  </Button>
                  <DeleteDialog id={course.id} type="course"></DeleteDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

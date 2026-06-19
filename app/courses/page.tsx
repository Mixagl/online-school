import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { getCourses } from "../actions/courses";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const courses = await getCourses();
  return (
    <section className="w-full bg-background pt-32 pb-32">
      <div className="mx-auto container px-5 flex flex-col gap-10">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-foreground text-center">
          Все курсы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card className="pt-0 flex flex-col" key={course.id}>
              {course.image ? (
                <Image
                  alt={course.title}
                  src={course.image}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              ) : (
                <div className="w-full bg-accent h-48 rounded-t-xl flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">
                    Нет изображения
                  </span>
                </div>
              )}
              <CardContent className="flex flex-col gap-5">
                <span className="text-xl text-foreground font-bold">
                  {course.title}
                </span>
                <span className="text-lg font-bold flex gap-2">
                  {course.price === 0
                    ? "Бесплатно"
                    : `${course.price.toLocaleString("ru-RU")} ₽`}
                </span>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/courses/${course.slug}`}>Подробнее</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import AnimatedSection from "../animated-section";

const coursesList: Array<{
  img?: string;
  title: string;
  tags: string[];
  price: number;
  rating: number;
}> = [
  {
    title: "Основы Git",
    tags: ["AI-тренажеры", "Гарантия", "Бонусы"],
    price: 3999,
    rating: 4.9,
  },
  {
    title: "HTML и CSS",
    tags: ["AI-тренажеры", "Практика в студии", "Гарантия", "Бонусы"],
    price: 3999,
    rating: 4.9,
  },
  {
    title: "Основы JavaScript",
    tags: ["AI-тренажеры", "Практика в студии", "Гарантия", "Бонусы"],
    price: 3999,
    rating: 4.8,
  },
];

export default function PopularCourses() {
  return (
    <AnimatedSection className="w-full bg-background pt-18" id="courses">
      <div className="container mx-auto flex flex-col gap-10 px-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground text-center">
            Популярные курсы
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto">
            Курсы, которые выбирают чаще всего
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesList.map((course) => (
            <Card className="pt-0 flex flex-col" key={course.title}>
              {course.img ? (
                <Image
                  alt={course.title}
                  src={course.img}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              ) : (
                <div className="w-full bg-accent h-48" />
              )}
              <CardContent className="flex flex-col gap-5">
                <span className="text-xl text-foreground font-bold">
                  {course.title}
                </span>
                <ul className="flex gap-2 flex-wrap">
                  {course.tags.map((tag) => (
                    <li key={tag}>
                      <Badge variant={"secondary"}>{tag}</Badge>
                    </li>
                  ))}
                  <li>
                    <Badge variant="secondary" className="gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                      {course.rating}
                    </Badge>
                  </li>
                </ul>
                <span className="text-lg font-bold flex gap-2">
                  {course.price.toLocaleString("ru-RU")} ₽
                </span>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 mt-auto">
                <Button asChild className="w-full">
                  <Link href="#">Подробнее</Link>
                </Button>
                <Button variant={"secondary"} asChild className="w-full">
                  <Link href="#">Начать</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

import { ArrowRight, Star, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="w-full h-200 pt-18">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-50 h-50 sm:w-75 sm:h-75 md:w-100 md:h-100 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-50 h-50 sm:w-75 sm:h-75 md:w-100 md:h-100 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62 h-62 sm:w-87 sm:h-87 md:w-125 md:h-125 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="h-full mx-auto container px-5 flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col sm:flex-row gap-2">
          <Badge variant={"outline"} className="px-5 py-4 text-sm">
            <Users /> 450+ учеников
          </Badge>
          <Badge variant={"outline"} className="px-5 py-4 text-sm">
            <Star /> 450+ учеников
          </Badge>
        </div>
        <h1 className="text-4xl max-w-6xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          Освойте{" "}
          <span className="bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            востребованную профессию
          </span>{" "}
          в IT с нуля за 6 месяцев
        </h1>
        <p className="text-base sm:text-lg text-center text-muted-foreground max-w-4xl leading-relaxed">
          Пошаговые онлайн-курсы с личным ментором-практиком. Гарантируем
          трудоустройство в технологические компании или вернем деньги по
          договору.
        </p>

        <div className="flex flex-col items-center gap-3 pt-4">
          <Link href="#courses">
            <Button size="lg" className="text-base px-8 h-14">
              Выбрать курс
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

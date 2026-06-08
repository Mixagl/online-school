"use client";

import { ArrowRight, Star, Users } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-72px)] flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-full mx-auto container px-5 flex flex-col justify-center items-center gap-5 "
      >
        <div className="flex flex-col sm:flex-row gap-2">
          <Badge variant={"outline"} className="px-5 py-4 text-sm">
            <Users /> 450+ учеников
          </Badge>
          <Badge variant={"outline"} className="px-5 py-4 text-sm">
            <Star /> 4.7 отзывы
          </Badge>
        </div>
        <h1 className="text-4xl max-w-6xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          Освойте{" "}
          <span className="text-primary/70">востребованную профессию</span> в IT
          с нуля за 6 месяцев
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
      </motion.div>
    </section>
  );
}

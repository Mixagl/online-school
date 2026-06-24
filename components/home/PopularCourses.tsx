import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import AnimatedSection from "../animated-section";

const coursesList: Array<{
  img?: string;
  title: string;
  tags: string[];
  price: number;
  rating: number;
  slug: string;
}> = [
  {
    title: "Основы Git",
    tags: ["AI-тренажеры", "Гарантия", "Бонусы"],
    price: 3999,
    rating: 4.9,
    slug: "git-basics",
  },
  {
    title: "HTML и CSS",
    tags: ["AI-тренажеры", "Практика в студии", "Гарантия"],
    price: 3999,
    rating: 4.9,
    slug: "html-css",
  },
  {
    title: "Основы JavaScript",
    tags: ["AI-тренажеры", "Практика в студии", "Бонусы"],
    price: 3999,
    rating: 4.8,
    slug: "javascript-basics",
  },
];

export default function PopularCourses() {
  return (
    <AnimatedSection
      className="w-full bg-zinc-50 dark:bg-black py-24 font-sans"
      id="courses"
    >
      <div className="container mx-auto flex flex-col gap-16 px-6 max-w-6xl">
        {/* Шапка секции в стиле продуктовых линеек Apple */}
        <div className="flex flex-col gap-3 text-left md:text-center max-w-2xl md:mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Обучение
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight text-zinc-900 dark:text-zinc-50">
            Выберите свой курс.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium text-balance">
            Программы обучения, оптимизированные под строгие требования
            работодателей.
          </p>
        </div>

        {/* Сетка карточек товаров/курсов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {coursesList.map((course) => (
            <div
              key={course.title}
              className="group relative flex flex-col rounded-[2rem] border border-black/6 dark:border-white/8 bg-white dark:bg-zinc-900/40 backdrop-blur-xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
            >
              {/* Верхняя визуальная часть (как дисплей девайса) */}
              <div className="relative w-full h-52 overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                {course.img ? (
                  <Image
                    alt={course.title}
                    src={course.img}
                    width={400}
                    height={208}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  /* Премиальная минималистичная заглушка с мягким градиентом Tailwind v4.3 */
                  <div className="absolute inset-0 bg-linear-to-b from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 flex items-center justify-center select-none">
                    <span className="text-xs font-semibold tracking-widest text-zinc-400 dark:text-zinc-600 uppercase">
                      Next.js Стек
                    </span>
                  </div>
                )}

                {/* Аккуратный шильдик рейтинга */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md border border-black/4 dark:border-white/8 text-xs font-semibold text-zinc-900 dark:text-zinc-50 shadow-xs">
                  <Star className="w-3 h-3 fill-zinc-900 text-zinc-900 dark:fill-zinc-50 dark:text-zinc-50" />
                  <span>{course.rating}</span>
                </div>
              </div>

              {/* Контентная часть карточки */}
              <div className="flex flex-col gap-6 p-8 flex-1">
                <div className="flex flex-col gap-3">
                  {/* Тэги в стиле меток спецификаций Apple */}
                  <div className="flex gap-1.5 flex-wrap">
                    {course.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] font-semibold tracking-wide px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-none rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mt-1">
                    {course.title}
                  </h3>
                </div>

                {/* Цена и ссылки внизу (паттерн Apple Store: инфо + синий экшен) */}
                <div className="flex flex-col gap-5 mt-auto pt-6 border-t border-black/5 dark:border-white/6">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
                      Стоимость обучения
                    </span>
                    <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                      {course.price.toLocaleString("ru-RU")} ₽
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-1">
                    {/* Ссылка "Подробнее" */}
                    <Link
                      href={`/courses/${course.slug}`}
                      className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                      Подробнее
                    </Link>

                    {/* Фирменная синяя ссылка-стрелка Apple */}
                    <Link
                      href={`/courses/${course.slug}/enroll`}
                      className="group inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline decoration-1 underline-offset-4"
                    >
                      Начать обучение
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

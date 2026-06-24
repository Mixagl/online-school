import { getCourses } from "../actions/courses";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default async function Page() {
  const courses = await getCourses();

  return (
    <section className="w-full bg-zinc-50 dark:bg-black pt-24 pb-24 md:pt-32 md:pb-32 font-sans">
      <div className="mx-auto max-w-6xl px-6 flex flex-col gap-16">
        {/* Заголовок каталога в стиле продуктовых линеек Apple Store */}
        <div className="flex flex-col gap-3 text-left md:text-center max-w-2xl md:mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Каталог
          </span>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight text-zinc-900 dark:text-zinc-50">
            Все программы обучения.
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium text-balance">
            Актуальные направления для старта карьеры в разработке с нуля и
            повышения квалификации.
          </p>
        </div>

        {/* Сетка карточек Hardware Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative flex flex-col rounded-3xl border border-black/6 dark:border-white/8 bg-white dark:bg-zinc-900/40 backdrop-blur-xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
            >
              {/* Область изображения девайса/карса */}
              <div className="relative w-full h-52 overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                {course.image ? (
                  <Image
                    alt={course.title}
                    src={course.image}
                    width={400}
                    height={208}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  /* Минималистичная Zinc-заглушка в стиле Apple Hardware */
                  <div className="absolute inset-0 bg-linear-to-b from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 flex flex-col items-center justify-center gap-3 select-none">
                    <BookOpen
                      className="w-5 h-5 text-zinc-300 dark:text-zinc-700"
                      strokeWidth={1.5}
                    />
                    <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-600 tracking-widest uppercase">
                      mixagl academy
                    </span>
                  </div>
                )}
              </div>

              {/* Контентная часть карточки */}
              <div className="flex flex-col justify-between p-8 flex-1 gap-8">
                <div className="flex flex-col gap-3">
                  {/* Служебные параметры курса (Стек) вместо цветных тегов */}
                  <span className="text-xs font-semibold tracking-wide text-zinc-400 dark:text-zinc-500">
                    Next.js • Tailwind • TypeScript
                  </span>

                  {/* Заголовок курса: крупный, плотный, без лимита min-h (композиция выравнивается за счет gap в flex) */}
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-snug">
                    {course.title}
                  </h3>
                </div>

                {/* Нижняя часть: Цена + Ссылка-акцент (Паттерн карточек Apple Card/Store) */}
                <div className="flex items-center justify-between pt-6 border-t border-black/4 dark:border-white/6 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                      Стоимость
                    </span>
                    <span
                      className={`text-xl font-bold tracking-tight ${
                        course.price === 0
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-zinc-900 dark:text-zinc-50"
                      }`}
                    >
                      {course.price === 0
                        ? "Бесплатно"
                        : `${course.price.toLocaleString("ru-RU")} ₽`}
                    </span>
                  </div>

                  {/* Фирменный экшен-линк Apple со стрелкой вправо */}
                  <Link
                    href={`/courses/${course.slug}`}
                    className="group/link inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline decoration-1 underline-offset-4"
                  >
                    Подробнее
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

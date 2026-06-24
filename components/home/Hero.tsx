import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-dvh pt-12 mt-0 flex items-center justify-center overflow-hidden bg-white dark:bg-black font-sans">
      {/* Мягкий рассеянный свет Apple, имитирующий студийное освещение девайса */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-200 h-100 bg-zinc-200/40 dark:bg-zinc-800/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 flex flex-col items-center gap-8 text-center">
        {/* Бедж в стиле Apple: ультратонкая рамка, плоский дизайн без пестроты */}
        <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-medium bg-zinc-100/80 dark:bg-zinc-900/80 border border-black/4 dark:border-white/6 backdrop-blur-xl">
          <span className="text-zinc-500 dark:text-zinc-400">
            <strong className="text-zinc-900 dark:text-zinc-50 font-semibold">
              450+
            </strong>{" "}
            выпускников
          </span>
          <div className="w-px h-3 bg-zinc-300 dark:bg-zinc-800" />
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-zinc-900 text-zinc-900 dark:fill-zinc-50 dark:text-zinc-50" />
            <span className="text-zinc-900 dark:text-zinc-50 font-semibold">
              4.7
            </span>
            <span className="text-zinc-400 dark:text-zinc-500">(оценки)</span>
          </div>
        </div>

        {/* Заголовок: Экстремальный контраст, плотный трекинг и чистый монохромный градиент */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-zinc-950 dark:text-zinc-50 max-w-4xl text-balance">
          Освойте профессию в IT.{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-b from-zinc-400 via-zinc-500 to-zinc-600 dark:from-zinc-400 dark:to-zinc-600">
            С нуля за 6 месяцев.
          </span>
        </h1>

        {/* Описание: Легкий и читаемый шрифт, средняя плотность */}
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl font-medium leading-relaxed text-balance">
          Пошаговые онлайн-курсы с личным ментором-практиком. Гарантируем
          трудоустройство или вернем деньги по договору.
        </p>

        {/* Блок целевых действий в стиле Apple Store */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 w-full sm:w-auto">
          <Link href="#courses" className="w-full sm:w-auto">
            {/* Главная кнопка: Глубокий черный/чистый белый цвет, сильное скругление */}
            <Button
              size="lg"
              className="group text-base font-medium px-8 h-12 rounded-full w-full sm:w-auto bg-zinc-950 text-zinc-50 hover:bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 transition-all duration-300 shadow-sm"
            >
              Выбрать курс
            </Button>
          </Link>

          {/* Ссылка-стрелка: Узнаваемый паттерн навигации с сайта Apple */}
          <Link
            href="#advantages"
            className="group inline-flex items-center gap-1 text-base font-medium text-blue-600 dark:text-blue-400 hover:underline decoration-1 underline-offset-4 transition-all"
          >
            Посмотреть преимущества
            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

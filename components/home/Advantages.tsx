import {
  Activity,
  Briefcase,
  Building2,
  Clock,
  Folder,
  LucideIcon,
  UserCheck,
} from "lucide-react";
import AnimatedSection from "../animated-section";
import { cn } from "@/lib/utils";

const advantagesList: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  // Добавляем класс для управления размером карточек в стиле Bento
  className?: string;
}> = [
  {
    title: "Трудоустройство с гарантией",
    description:
      "Возвращаем деньги, если вы не найдете работу после обучения. Полная юридическая защита ваших инвестиций.",
    icon: Briefcase,
    className: "md:col-span-2", // Большая карточка
  },
  {
    title: "Только актуальный стек",
    description:
      "Преподаем технологии, которые требуют работодатели прямо сейчас в 2026 году.",
    icon: Activity,
  },
  {
    title: "Проекты в портфолио",
    description:
      "К концу курса у вас будет 4+ реальных сложных кейса, опубликованных на GitHub.",
    icon: Folder,
  },
  {
    title: "Стажировка в компаниях",
    description:
      "Лучшие студенты получают официальные офферы еще во время прохождения учебы.",
    icon: Building2,
  },
  {
    title: "Личный ментор",
    description:
      "Практикующий Senior-разработчик ежедневно проверяет ваш код и отвечает на любые сложные вопросы.",
    icon: UserCheck,
    className: "md:col-span-2", // Большая карточка для баланса сетки
  },
  {
    title: "Доступ навсегда",
    description:
      "Материалы курса остаются у вас навсегда, включая все будущие обновления и новые модули.",
    icon: Clock,
  },
];

export default function Advantages() {
  return (
    <AnimatedSection
      className="relative w-full bg-zinc-50 dark:bg-black py-24 md:py-32 overflow-hidden font-sans"
      id="advantages"
    >
      <div className="relative mx-auto max-w-6xl px-6 flex flex-col gap-16">
        {/* Заголовок в стиле Apple: компактный трекинг, чистый цвет */}
        <div className="flex flex-col gap-3 text-left md:text-center max-w-3xl md:mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Преимущества
          </span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-zinc-900 dark:text-zinc-50">
            Почему выбирают нас.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg sm:text-xl font-medium max-w-2xl md:mx-auto leading-relaxed">
            Создаем условия, в которых невозможно не научиться кодить и найти
            работу.
          </p>
        </div>

        {/* Асимметричная сетка Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {advantagesList.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <div
                key={advantage.title}
                className={cn(
                  // Базовая карточка Apple: радиус 2rem (32px), тонкая рамка, размытие
                  "group relative overflow-hidden rounded-[2rem]",
                  "border border-black/6 dark:border-white/8",
                  "bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl",
                  "p-8 flex flex-col justify-between min-h-65",
                  "transition-all duration-500 ease-out",
                  // Эффект парения при наведении
                  "hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]",
                  advantage.className,
                )}
              >
                {/* Едва заметный внутренний градиент */}
                <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-black/1 dark:to-white/1 pointer-events-none" />

                {/* Строгая монохромная иконка без цветных плашек */}
                <div className="relative z-10 text-zinc-400 dark:text-zinc-500 transition-colors duration-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>

                {/* Текстовый блок внизу карточки */}
                <div className="flex flex-col gap-2 relative z-10 mt-12">
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {advantage.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed font-normal max-w-[90%]">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

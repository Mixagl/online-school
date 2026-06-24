import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import AnimatedSection from "../animated-section";

const reviewsList: Array<{
  name: string;
  avatar?: string;
  status: string;
  content: string;
  rating: number;
}> = [
  {
    name: "Вера Андреева",
    status: "Выпускница курса JavaScript",
    rating: 5,
    content:
      "Отличная школа! Долго сомневалась, смогу ли освоить программирование с нуля, но менторы разложили всё по полочкам. Практики очень много, домашние задания проверяют детально. Уже во время обучения собрала портфолио из 4 проектов и устроилась на стажировку.",
  },
  {
    name: "Екатерина Миронова",
    status: "Выпускница курса HTML и CSS",
    rating: 5,
    content:
      "Преподаватели умеют увлечь и объясняют сложные вещи удивительно простым языком. Заметно подтянулась математика и логика. Формат обучения идеально сбалансирован, никакой лишней воды — только то, что реально нужно для создания интерфейсов.",
  },
  {
    name: "Елена Ковалева",
    status: "Выпускница курса Git",
    rating: 5,
    content:
      "Переходила в IT из сферы маркетинга. Самый большой плюс — живые вебинары и сильное комьюнити. Отдельное спасибо карьерному центру: помогли грамотно составить резюме и подготовили к техническому собеседованию. Получила оффер через месяц после выпуска!",
  },
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

export default function Reviews() {
  return (
    <AnimatedSection
      className="w-full bg-zinc-50 dark:bg-black py-24 font-sans"
      id="testimonials"
    >
      <div className="container mx-auto flex flex-col px-6 gap-16 max-w-6xl">
        {/* Шапка в стиле Apple News / Editorial */}
        <div className="flex flex-col gap-3 text-left md:text-center max-w-2xl md:mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Мнения
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight text-zinc-900 dark:text-zinc-50">
            Говорят наши студенты.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium text-balance">
            Реальные истории людей, которые изменили свою жизнь и карьеру вместе
            с нами.
          </p>
        </div>

        {/* Сетка карточек в стиле карточек Apple Card / Apple Wallet */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
          {reviewsList.map((review) => (
            <div
              key={review.name}
              className="flex flex-col justify-between rounded-[2rem] border border-black/6 dark:border-white/8 bg-white dark:bg-zinc-900/40 backdrop-blur-xl p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
            >
              <div className="flex flex-col gap-5">
                {/* Монохромный рейтинг: строгий стиль вместо яркого золотого */}
                <div className="flex items-center gap-0.5 text-zinc-900 dark:text-zinc-50">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(review.rating)
                          ? "fill-current"
                          : "opacity-20"
                      }`}
                    />
                  ))}
                </div>

                {/* Текст отзыва: кавычки убраны, шрифт адаптирован под Apple Typography */}
                <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed font-medium tracking-tight">
                  {review.content}
                </p>
              </div>

              {/* Профиль студента: чистый, бесшовный переход без разделительной линии */}
              <div className="flex items-center gap-3.5 mt-8">
                <Avatar className="h-10 w-10 border border-black/4 dark:border-white/8 shadow-xs">
                  {review.avatar && (
                    <AvatarImage src={review.avatar} alt={review.name} />
                  )}
                  {/* Заглушка в тон интерфейса девайсов Apple */}
                  <AvatarFallback className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 text-xs font-semibold">
                    {getInitials(review.name)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col min-w-0">
                  <span className="text-zinc-900 dark:text-zinc-50 text-sm font-semibold tracking-tight truncate">
                    {review.name}
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-500 text-xs font-medium tracking-tight truncate">
                    {review.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

import AnimatedSection from "../animated-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqList: Array<{ title: string; content: string; value: string }> = [
  {
    title: "Нужны ли базовые знания программирования для старта обучения?",
    value: "basic-knowledge",
    content:
      "Нет, большинство наших курсов рассчитаны на новичков. Мы начинаем с самых азов и базовых понятий. Главное — это ваше желание учиться и наличие компьютера.",
  },
  {
    title: "Как проходят занятия и можно ли совмещать их с работой?",
    value: "schedule",
    content:
      "Обучение проходит полностью онлайн в гибком формате. Вы смотрите лекции в удобное время и выполняете практические задания. Все вебинары сохраняются в записи, поэтому вы легко сможете совмещать учебу с работой или основной учебой.",
  },
  {
    title: "Помогаете ли вы найти работу после окончания курса?",
    value: "career",
    content:
      "Да, у нас работает Карьерный центр. Мы помогаем составить сильное резюме, оформляем портфолио из ваших учебных проектов и готовим к техническим собеседованиям. Также мы рекомендуем лучших выпускников нашим компаниям-партнерам.",
  },
];

export default function Faq() {
  return (
    <AnimatedSection
      className="w-full bg-white dark:bg-black py-24 md:py-32 font-sans"
      id="faq"
    >
      <div className="container mx-auto flex flex-col gap-16 px-6 max-w-3xl">
        {/* Шапка секции в стиле Apple Support */}
        <div className="flex flex-col gap-3 text-left md:text-center max-w-2xl md:mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Вопросы
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight text-zinc-900 dark:text-zinc-50">
            Есть вопросы? Отвечаем.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium text-balance">
            Если вы не нашли нужный ответ — напишите в нашу службу поддержки.
          </p>
        </div>

        {/* Бесшовный аккордеон Apple Line Style */}
        <Accordion type="single" collapsible className="w-full">
          {faqList.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className="border-b border-black/8 dark:border-white/8 py-2 transition-all duration-500 ease-out group"
            >
              {/* Кнопка вопроса: крупный, полужирный шрифт, чистый цвет */}
              <AccordionTrigger className="text-left text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight hover:no-underline py-6 transition-all duration-300 [&>svg]:text-zinc-400 dark:[&>svg]:text-zinc-500 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-[1.5] data-[state=open]:text-zinc-950 dark:data-[state=open]:text-zinc-100">
                {faq.title}
              </AccordionTrigger>

              {/* Контент ответа: легкий, читаемый, с выверенными отступами */}
              <AccordionContent className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed pb-6 pr-6 font-medium tracking-tight">
                {faq.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
}

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
    <AnimatedSection className="w-full pt-50 pb-18" id="faq">
      <div className="container mx-auto flex flex-col gap-10 px-5">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Часто задаваемые вопросы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Если не нашли ответ — напишите нам
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto w-full space-y-2"
        >
          {faqList.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
}

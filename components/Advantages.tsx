import {
  Activity,
  Briefcase,
  Building2,
  Clock,
  Folder,
  LucideIcon,
  UserCheck,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const advantagesList: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Трудоустройство с гарантией",
    description: "Возвращаем деньги, если вы не найдете работу после обучения.",
    icon: Briefcase,
  },
  {
    title: "Только актуальный стек",
    description:
      "Преподаем технологии, которые требуют работодатели прямо сейчас в 2026 году.",
    icon: Activity,
  },
  {
    title: "Проекты в портфолио",
    description: "К концу курса у вас будет 4+ реальных кейса на GitHub.",
    icon: Folder,
  },
  {
    title: "Стажировка в компаниях-партнерах",
    description: "Лучшие студенты получают офферы еще во время учебы.",
    icon: Building2,
  },
  {
    title: "Личный ментор",
    description:
      "Практикующий разработчик проверяет ваш код и отвечает на вопросы.",
    icon: UserCheck,
  },
  {
    title: "Доступ навсегда",
    description:
      "Материалы курса остаются у вас навсегда, включая все обновления.",
    icon: Clock,
  },
];

export default function Advantages() {
  return (
    <section className="w-full bg-background pt-18" id="advantages">
      <div className="mx-auto container px-5 flex flex-col gap-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground text-center">
          Преимущества
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto">
          Почему студенты выбирают нас
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantagesList.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <Card
                key={advantage.title}
                className="hover:-translate-y-1 transition-transform"
              >
                <CardContent className="flex flex-col gap-7">
                  <div className="p-3 bg-accent rounded-sm w-fit">
                    <Icon size={18} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-foreground text-xl">
                      {advantage.title}
                    </span>
                    <span className="text-muted-foreground text-base">
                      {advantage.description}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const reviewsList: Array<{
  name: string;
  status: string;
  content: string;
  rating: number;
}> = [
  {
    name: "Вера Андреева",
    status: "Прошла курс JavaScript",
    rating: 5,
    content:
      "Отличная школа! Долго сомневался, смогу ли освоить программирование с нуля, но менторы разложили всё по полочкам. Практики очень много, домашние задания проверяют детально и дают развернутый фидбек. Уже во время обучения собрал портфолио из 4 проектов и устроился на стажировку. Рекомендую!",
  },
  {
    name: "Екатерина Миронова",
    status: "Прошла курс HTML и CSS",
    rating: 4.2,
    content:
      "Сын в восторге от занятий! Раньше он просто играл в компьютер, а теперь сам создает простые игры и делится ими с друзьями. Преподаватели умеют увлечь детей и объясняют сложные вещи простым языком. Заметно подтянулась математика и логика в школе. Будем продолжать обучение дальше.",
  },
  {
    name: "Елена Ковалева",
    status: "Прошла курс Git",
    rating: 4.9,
    content:
      "Переходила в IT из сферы маркетинга. Курс интенсивный, расслабиться не получится, но результат того стоит. Самый большой плюс — живые вебинары и сильное комьюнити в чате. Отдельное спасибо карьерному центру: помогли грамотно составить резюме и подготовили к техническому собеседованию. Получила оффер через месяц после выпуска!",
  },
];

export default function Reviews() {
  return (
    <section className="w-full bg-background pt-18" id="testimonials">
      <div className="container mx-auto flex flex-col px-5 gap-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground text-center">
          Отзывы наших учеников
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviewsList.map((review) => (
            <Card key={review.name}>
              <CardContent className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="grayscale"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <span className="text-foreground text-base">
                      {review.name}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {review.status}
                    </span>
                  </div>
                </div>
                <Badge variant={"secondary"}>
                  <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />{" "}
                  {review.rating}
                </Badge>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {review.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

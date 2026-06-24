import { getPostBySlug } from "@/app/actions/posts";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const authorInitials = post.authorName
    ? post.authorName[0].toUpperCase()
    : "?";

  return (
    <section className="w-full bg-white dark:bg-black pt-24 pb-24 md:pt-32 md:pb-32 font-sans text-zinc-600 dark:text-zinc-400">
      {/* Идеальный контейнер для лонгридов (max-w-2xl / 672px) — стандарт Apple Editorial */}
      <div className="mx-auto max-w-2xl px-6 flex flex-col gap-10">
        {/* Кнопка возврата: Фирменная синяя ссылка Apple Store */}
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline decoration-1 underline-offset-4 w-fit"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 ease-out group-hover:-translate-x-0.5" />
          Назад в журнал
        </Link>

        {/* Шапка лонгрида */}
        <div className="flex flex-col gap-5 items-start border-b border-black/6 dark:border-white/6 pb-8 w-full">
          {/* Инфо-строка: лаконичный текстовый паттерн */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold tracking-tight">
            {/* Рубрика */}
            <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wider text-[10px]">
              {post.category}
            </span>

            <span className="text-zinc-300 dark:text-zinc-800">•</span>

            {/* Дата */}
            <time className="text-zinc-400 dark:text-zinc-500 font-medium">
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : "—"}
            </time>
          </div>

          {/* Главный заголовок: Плотный трекинг, чистый цвет */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.12] text-balance">
            {post.title}
          </h1>

          {/* Лид-абзац (Описание): Слегка увеличен, как вводный абзац в прессе */}
          <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl leading-relaxed text-balance font-medium tracking-tight">
            {post.description}
          </p>

          {/* Карточка автора: Маленькая, бесшовная, в самом низу шапки */}
          <div className="flex items-center gap-2.5 pt-4">
            <Avatar className="h-6 w-6 border border-black/4 dark:border-white/8 shadow-xs">
              <AvatarFallback className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 text-[9px] font-bold">
                {authorInitials}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight">
              {post.authorName}
            </span>
          </div>
        </div>

        {/* Тело статьи: Выверенная глубина шрифтов и премиальные блоки кода */}
        <div
          className="w-full text-zinc-800 dark:text-zinc-300 max-w-none font-normal prose dark:prose-invert prose-zinc text-base sm:text-lg leading-relaxed tracking-tight
          prose-headings:tracking-tight 
          prose-headings:font-bold 
          prose-headings:text-zinc-950 dark:prose-headings:text-zinc-50
          prose-strong:text-zinc-950 dark:prose-strong:text-zinc-50
          prose-code:text-zinc-900 dark:prose-code:text-zinc-100 prose-code:bg-zinc-100 dark:prose-code:bg-zinc-900/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-white/6 prose-pre:rounded-2xl prose-pre:p-5"
        >
          {post.content}
        </div>
      </div>
    </section>
  );
}

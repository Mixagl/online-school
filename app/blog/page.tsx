import { getPosts } from "../actions/posts";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="w-full bg-white dark:bg-black pt-24 pb-24 md:pt-32 md:pb-32 font-sans text-zinc-500 dark:text-zinc-400">
      <div className="mx-auto max-w-2xl px-6 flex flex-col gap-16">
        {/* Шапка страницы блога в стиле журнальной верстки Apple Newsroom */}
        <div className="flex flex-col gap-3 text-left md:text-center md:mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Журнал
          </span>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            Свежие статьи.
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium text-balance">
            Руководства, инсайты и разборы из мира фронтенда, бэкенда и
            архитектуры приложений.
          </p>
        </div>

        {/* Бесшовная лента новостей Apple News Style Line */}
        <div className="flex flex-col w-full">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col gap-3 border-b border-black/6 dark:border-white/6 py-8 transition-opacity duration-300 first:pt-0 last:border-b-0"
            >
              {/* Мета-информация: Ультракомпактный плоский вывод */}
              <div className="flex items-center gap-3 text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 tracking-tight">
                {/* Категория в виде текстового акцента без фона */}
                <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wider text-[10px]">
                  {post.category}
                </span>

                <span className="text-zinc-300 dark:text-zinc-800">•</span>

                <time>
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString("ru-RU", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : "—"}
                </time>

                <span className="text-zinc-300 dark:text-zinc-800">•</span>

                <span className="font-medium text-zinc-500 dark:text-zinc-400">
                  {post.authorName}
                </span>
              </div>

              {/* Заголовок и вводный текст */}
              <div className="flex flex-col gap-2.5">
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 flex items-start gap-4 justify-between">
                  <span className="line-clamp-2">{post.title}</span>
                  {/* Изящная стрелочка Apple Link Arrow */}
                  <ArrowRight className="w-5 h-5 text-zinc-300 dark:text-zinc-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 shrink-0 mt-1" />
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed font-normal line-clamp-3 tracking-tight">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

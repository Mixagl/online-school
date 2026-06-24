import Link from "next/link";

const footerLinks = [
  {
    title: "Продукт",
    links: [
      { label: "Курсы", href: "#courses" },
      { label: "Преимущества", href: "#advantages" },
      { label: "Отзывы", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "#" },
      { label: "Блог", href: "/blog" },
      { label: "Контакты", href: "#" },
      { label: "Партнёрам", href: "#" },
    ],
  },
  {
    title: "Правовая информация",
    links: [
      { label: "Политика конфиденциальности", href: "#" },
      { label: "Условия использования", href: "#" },
      { label: "Cookie", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-50 dark:bg-black border-t border-black/4 dark:border-white/6 pt-16 pb-12 font-sans text-zinc-500 dark:text-zinc-400">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col gap-10">
        {/* Блок примечаний (Apple Footnotes) — ключевой маркер стиля */}
        <div className="text-[11px] leading-relaxed border-b border-black/8 dark:border-white/8 pb-6 tracking-tight space-y-2">
          <p>
            * Гарантия трудоустройства регулируется официальным договором
            оказания услуг. В случае, если после успешного завершения всех
            учебных модулей, выполнения практических кейсов и прохождения
            карьерного трека студент не получает официальный оффер, онлайн-школа
            обязуется вернуть полную стоимость обучения.
          </p>
          <p>
            Доступ к обновляемым материалам предоставляется бессрочно. Торговые
            марки Next.js, Tailwind CSS и GitHub принадлежат их соответствующим
            владельцам.
          </p>
        </div>

        {/* Сетка ссылок каталога Apple Style */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-6 pt-2">
          {/* Блок бренда (Компактный, как в секции Apple Directory) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <Link
              href="/"
              className="text-zinc-900 dark:text-zinc-50 font-semibold text-base tracking-tight hover:opacity-70 transition-opacity"
            >
              mixagl
            </Link>
            <p className="text-[11px] text-zinc-400 dark:text-zinc-500 max-w-xs leading-relaxed">
              Платформа профессионального онлайн-образования. Проектируем
              экосистему, в которой технологии изучаются через реальную
              практику.
            </p>
          </div>

          {/* Колонки категорий */}
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              {/* Заголовок колонки: строгий, мелкий, без капса, как на apple.com */}
              <h4 className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[11px] text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:underline transition-colors font-normal tracking-tight block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Нижняя инфо-панель (Copyright & Status) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-black/4 dark:border-white/6 text-[11px]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="text-zinc-400 dark:text-zinc-500">
              © 2026 mixagl. Все права защищены.
            </p>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-800">
              |
            </span>
            <span className="text-zinc-400 dark:text-zinc-500">
              Школа программирования в России
            </span>
          </div>

          {/* Аккуратная плашка статуса в стиле Apple System Status */}
          <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Все службы работают штатно
          </div>
        </div>
      </div>
    </footer>
  );
}

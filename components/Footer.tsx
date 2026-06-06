import Link from "next/link";
import { GraduationCap } from "lucide-react";

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
      { label: "Блог", href: "#" },
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
    <footer className="w-full bg-muted/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <GraduationCap className="w-7 h-7 text-primary" />
              <span>сотка</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Онлайн-школа программирования с гарантией трудоустройства.
              Актуальные технологии, личные менторы, реальные проекты.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h4 className="font-medium text-sm">{group.title}</h4>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} сотка. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

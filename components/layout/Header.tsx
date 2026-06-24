"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { LogOut, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useRouter } from "next/navigation";
import { useState } from "react";

const links: Array<{ label: string; href: string }> = [
  { label: "Курсы", href: "/courses" },
  { label: "Блог", href: "/blog" },
];

export default function Header() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-black/4 dark:border-white/6 h-12 fixed top-0 left-0 z-50 transition-all">
      <div className="mx-auto max-w-5xl h-full flex items-center justify-between px-6">
        {/* Логотип: Строгий, компактный, без лишнего веса */}
        <Link
          href={"/"}
          className="text-zinc-900 dark:text-zinc-50 font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity"
        >
          mixagl
        </Link>

        {/* Навигация (Десктоп) в стиле apple.com */}
        <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-normal text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors tracking-tight"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Блок авторизации */}
        <div className="flex gap-6 items-center">
          {session ? (
            /* Состояние: Авторизован */
            <div className="hidden gap-5 items-center lg:flex">
              {/* Профиль как единый лаконичный элемент без громоздких плашек */}
              <div className="flex items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <Avatar className="h-5 w-5 border border-black/6 dark:border-white/10">
                  <AvatarFallback className="bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 text-[9px] font-bold">
                    {session?.user.name?.[0]?.toUpperCase() || "?"}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 tracking-tight">
                  {session?.user.name}
                </span>
              </div>

              <button
                className="text-xs font-normal text-zinc-400 hover:text-red-500 dark:text-zinc-500 dark:hover:text-red-400 transition-colors tracking-tight flex items-center gap-1.5"
                onClick={async () => {
                  await authClient.signOut();
                  router.push("/");
                }}
              >
                <LogOut className="w-3.5 h-3.5 stroke-[1.5]" />
                Выйти
              </button>
            </div>
          ) : (
            /* Состояние: Гость (Интерфейс входа в стиле Apple ID / iCloud) */
            <div className="hidden gap-5 lg:flex items-center">
              <Link
                href={"/auth/login"}
                className="text-xs font-normal text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors tracking-tight"
              >
                Войти
              </Link>
              <Link href={"/auth/register"}>
                {/* Компактная закругленная кнопка действия */}
                <Button
                  size="sm"
                  className="text-[11px] font-medium h-6 px-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white dark:bg-blue-500 dark:hover:bg-blue-400 border-none transition-all shadow-none"
                >
                  Регистрация
                </Button>
              </Link>
            </div>
          )}

          {/* Мобильное меню (Миниатюрный кастомный бургер в стиле iOS) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              className="lg:hidden flex flex-col justify-center items-end gap-1 w-5 h-5 group"
              asChild
            >
              <button className="focus:outline-none">
                <span className="w-4 h-[1.5px] bg-zinc-900 dark:bg-zinc-50 block transition-all" />
                <span className="w-3 h-[1.5px] bg-zinc-900 dark:bg-zinc-50 block transition-all group-hover:w-4" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="w-full h-screen bg-white/98 dark:bg-black/98 backdrop-blur-2xl border-none p-8 flex flex-col justify-between pt-16 duration-500"
            >
              <div className="flex flex-col gap-10 max-w-xl mx-auto w-full">
                <SheetHeader className="text-left hidden">
                  <SheetTitle>Навигация</SheetTitle>
                </SheetHeader>

                {/* Крупные ссылки в мобильном меню, как при раскрытии панели на apple.com */}
                <nav>
                  <ul className="flex flex-col gap-6">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          onClick={() => setIsOpen(false)}
                          href={link.href}
                          className="text-zinc-900 dark:text-zinc-50 hover:opacity-70 transition-opacity text-3xl font-semibold tracking-tight block py-1"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Мобильная авторизация в самом низу */}
              <div className="pt-6 border-t border-black/5 dark:border-white/8 max-w-xl mx-auto w-full mb-12">
                {session ? (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 border border-black/6 dark:border-white/10">
                        <AvatarFallback className="bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 text-xs font-bold">
                          {session.user.name?.[0]?.toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        {session.user.name}
                      </span>
                    </div>
                    <button
                      onClick={async () => {
                        setIsOpen(false);
                        await authClient.signOut();
                        router.push("/");
                      }}
                      className="text-sm font-medium text-red-500 dark:text-red-400"
                    >
                      Выйти
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <Link
                      href="/auth/login"
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        className="w-full h-10 rounded-full text-xs font-medium border-black/8 dark:border-white/10 text-zinc-900 dark:text-zinc-50 shadow-none"
                        variant="outline"
                      >
                        Войти
                      </Button>
                    </Link>
                    <Link
                      href="/auth/register"
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button className="w-full h-10 rounded-full text-xs font-medium bg-blue-600 text-white dark:bg-blue-500 border-none shadow-none">
                        Регистрация
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

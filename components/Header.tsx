"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { GraduationCap, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const links: Array<{ label: string; href: string }> = [
  { label: "Преимущества", href: "#advantages" },
  { label: "Популярные курсы", href: "#courses" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-border h-18 fixed top-0 left-0 z-50">
      <div className="mx-auto container flex h-full items-center justify-between px-5">
        <Link
          href={"/"}
          className="text-foreground font-bold text-3xl flex gap-2 items-center"
        >
          <GraduationCap />
          сотка
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-5 items-center">
          <Link href={"#courses"}>
            <Button>Начать учиться</Button>
          </Link>
          <Sheet>
            <SheetTrigger className="md:hidden" asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="px-5">
              <SheetHeader>
                <SheetTitle>Меню</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col">
                <nav>
                  <ul className="flex flex-col gap-3">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors text-base"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

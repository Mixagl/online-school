"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
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

const links: Array<{ label: string; href: string }> = [
  { label: "Курсы", href: "/courses" },
  { label: "Блог", href: "/blog" },
];

export default function Header() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  return (
    <header className="w-full bg-background border-b border-border h-18 fixed top-0 left-0 z-50">
      <div className="mx-auto container flex h-full items-center justify-between px-5">
        <Link
          href={"/"}
          className="text-foreground font-bold text-3xl flex gap-2 items-center"
        >
          mixagl
        </Link>
        <nav className="hidden lg:block">
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
          {session ? (
            <div className="hidden gap-3 items-center lg:flex">
              <Avatar>
                <AvatarFallback>{session?.user.name[0] || "?"}</AvatarFallback>
              </Avatar>
              {session?.user.name}
              <Button
                onClick={async () => {
                  await authClient.signOut();
                  router.push("/");
                }}
              >
                Выйти
              </Button>
            </div>
          ) : (
            <div className="hidden gap-3 lg:flex">
              <Link href={"/auth/login"}>
                <Button>Войти</Button>
              </Link>
              <Link href={"/auth/register"}>
                <Button>Регистрация</Button>
              </Link>
            </div>
          )}

          <Sheet>
            <SheetTrigger className="lg:hidden" asChild>
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

                <div className="mt-5 flex flex-col gap-2">
                  {session ? (
                    <>
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarFallback>
                            {session.user.name?.[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{session.user.name}</span>
                      </div>
                      <Button
                        onClick={async () => {
                          await authClient.signOut();
                          router.push("/");
                        }}
                        variant="secondary"
                      >
                        Выйти
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/auth/login">
                        <Button className="w-full" variant="outline">
                          Войти
                        </Button>
                      </Link>
                      <Link href="/auth/register">
                        <Button className="w-full">Регистрация</Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

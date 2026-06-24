"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const formSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(8, "Пароль должен быть минимум 8 символов"),
});

export default function RegisterPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(formData: z.infer<typeof formSchema>) {
    const { error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      toast.error(error.message || "Ошибка входа", { position: "top-center" });
    } else {
      console.log("Успешный вход");
      router.push("/");
    }
  }

  return (
    <section className="w-full bg-zinc-50 dark:bg-black min-h-[calc(100vh-48px)] flex items-center justify-center pt-12 pb-12 font-sans text-zinc-500 dark:text-zinc-400">
      {/* Центрированный контейнер формы Apple ID Style (max-w-md / 448px) */}
      <div className="w-full max-w-md px-6 mx-auto">
        <Card className="border border-black/6 dark:border-white/8 bg-white dark:bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.04)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
          {/* Заголовок входа: лаконичный, плотный, по центру */}
          <CardHeader className="p-0 pb-8 text-center flex flex-col gap-2">
            <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Вход в mixagl
            </CardTitle>
            <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 tracking-tight">
              Используйте вашу учетную запись для доступа к курсам
            </p>
          </CardHeader>

          <CardContent className="p-0">
            <form id="register-form" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup className="flex flex-col gap-5">
                {/* Поле: Email */}
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="flex flex-col gap-1.5"
                    >
                      <FieldLabel
                        htmlFor="email"
                        className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 tracking-tight pl-1"
                      >
                        Email
                      </FieldLabel>
                      <Input
                        {...field}
                        id="email"
                        aria-invalid={fieldState.invalid}
                        placeholder="name@example.com"
                        autoComplete="off"
                        className="w-full h-10 px-3.5 rounded-xl border border-black/10 dark:border-white/12 bg-zinc-50/50 dark:bg-zinc-950/40 text-sm font-medium text-zinc-900 dark:text-zinc-50 placeholder-zinc-300 dark:placeholder-zinc-700 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-all shadow-none"
                      />
                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                          className="text-xs font-medium text-red-500 pl-1 mt-0.5"
                        />
                      )}
                    </Field>
                  )}
                />

                {/* Поле: Пароль */}
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      className="flex flex-col gap-1.5"
                    >
                      <FieldLabel
                        htmlFor="password"
                        className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 tracking-tight pl-1"
                      >
                        Пароль
                      </FieldLabel>
                      <Input
                        {...field}
                        id="password"
                        type="password"
                        aria-invalid={fieldState.invalid}
                        placeholder="Введите пароль"
                        autoComplete="off"
                        className="w-full h-10 px-3.5 rounded-xl border border-black/10 dark:border-white/12 bg-zinc-50/50 dark:bg-zinc-950/40 text-sm font-medium text-zinc-900 dark:text-zinc-50 placeholder-zinc-300 dark:placeholder-zinc-700 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-all shadow-none"
                      />
                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                          className="text-xs font-medium text-red-500 pl-1 mt-0.5"
                        />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </form>
          </CardContent>

          {/* Панель кнопок: Строгая иерархия Apple ID */}
          <CardFooter className="p-0 pt-8 flex flex-col sm:flex-row-reverse items-center justify-between gap-4 border-t border-black/4 dark:border-white/6 mt-6">
            <Button
              type="submit"
              form="register-form"
              className="w-full sm:w-auto h-10 px-6 text-sm font-medium rounded-full bg-blue-600 hover:bg-blue-500 text-white dark:bg-blue-500 dark:hover:bg-blue-400 border-none transition-colors shadow-none shrink-0"
            >
              Войти
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
              className="w-full sm:w-auto h-10 px-5 text-sm font-medium rounded-full border-black/8 dark:border-white/12 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-none"
            >
              Сбросить
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import z from "zod";
import { createPost, updatePost } from "../actions/posts";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createPostSchema, CreatePostSchemaType } from "@/lib/validations";

interface Props {
  post?: {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    content: string;
    category: string;
  };
}

export default function PostForm({ post }: Props) {
  const isEditing = !!post;
  const router = useRouter();
  const form = useForm<CreatePostSchemaType>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      description: post?.description || "",
      category:
        (post?.category as "tutorial" | "updates" | "news") || "tutorial",
      content: post?.content || "",
    },
  });

  async function onSubmit(data: CreatePostSchemaType) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("slug", data.slug);
    formData.append("description", data.description || "");
    formData.append("content", data.content);
    formData.append("category", data.category);

    let result;
    if (isEditing) {
      result = await updatePost(post.id, formData);
    } else {
      result = await createPost(formData);
    }

    if (result.success) {
      console.log(isEditing ? "Пост обновлен" : "Пост создан");
      router.push("/admin/posts");
    } else {
      toast.error("Что-то пошло не так");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isEditing ? "Редактировать пост" : "Создать пост"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form id="post-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Заголовок */}
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="title">Заголовок</FieldLabel>
                  <Input
                    {...field}
                    id="title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Введите заголовок поста"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Slug */}
            <Controller
              name="slug"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="slug">Slug</FieldLabel>
                  <Input
                    {...field}
                    id="slug"
                    aria-invalid={fieldState.invalid}
                    placeholder="Введите slug поста"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Описание */}
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="description">Описание</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="description"
                      placeholder="Описание"
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                      value={field.value ?? ""}
                    />
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Контент */}
            <Controller
              name="content"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="content">Контент</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="content"
                      placeholder="Контент"
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                      value={field.value ?? ""}
                    />
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Категория */}
            <Controller
              name="category"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="category">Категория</FieldLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tutorial">Туториал</SelectItem>
                      <SelectItem value="updates">Обновления</SelectItem>
                      <SelectItem value="news">Новости</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation={"horizontal"}>
          <Button
            type="button"
            variant={"outline"}
            onClick={() => form.reset()}
          >
            Сбросить
          </Button>
          <Button type="submit" form="post-form">
            {isEditing ? "Сохранить" : "Создать"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}

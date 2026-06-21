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
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";
import { createCourseSchema, CreateCourseSchemaType } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { createCourse, updateCourse } from "../actions/courses";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  course?: {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    image: string | null;
    price: number;
  };
}

export default function CourseForm({ course }: Props) {
  const isEditing = !!course;
  const router = useRouter();
  const form = useForm<CreateCourseSchemaType>({
    resolver: zodResolver(createCourseSchema),
    defaultValues: {
      title: course?.title || "",
      description: course?.description || "",
      image: course?.image || "",
      slug: course?.slug || "",
      price: course?.price || 0,
    },
  });

  async function onSubmit(data: CreateCourseSchemaType) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description || "");
    formData.append("slug", data.slug);
    formData.append("image", data.image || "");
    formData.append("price", String(data.price));

    let result;
    if (isEditing) {
      result = await updateCourse(course.id, formData);
    } else {
      result = await createCourse(formData);
    }

    if (result.success) {
      console.log(isEditing ? "Курс обновлен" : "Курс добавлен");
      router.push("/admin/courses");
    } else {
      toast.error("Что-то пошло не так");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? "Изменить курс" : "Добавить курс"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="course-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Название */}
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="title">Название</FieldLabel>
                  <Input
                    {...field}
                    id="title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Введите название курса"
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
                    placeholder="Введите slug курса"
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
                      placeholder="Введите описание курса"
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
              name="image"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="image">Изображение</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="image"
                      placeholder="Изображение"
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
            {/* Цена */}
            <Controller
              name="price"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="price">Цена</FieldLabel>
                  <Input
                    {...field}
                    id="price"
                    type="number"
                    aria-invalid={fieldState.invalid}
                    placeholder="Введите цену курса"
                    autoComplete="off"
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
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
          <Button type="submit" form="course-form">
            {isEditing ? "Изменить" : "Добавить"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}

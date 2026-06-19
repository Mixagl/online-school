import { getCourseBySlug } from "@/app/actions/courses";
import { notFound } from "next/navigation";
import CourseContent from "./course-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) return notFound();

  return <CourseContent course={course} />;
}

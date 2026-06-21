import { getCourseBySlug } from "@/app/actions/courses";
import CourseForm from "@/app/admin/course-form";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) return notFound();
  return (
    <section className="w-full bg-background pt-32 pb-32">
      <div className="mx-auto container px-5 max-w-2xl">
        <CourseForm course={course} />
      </div>
    </section>
  );
}

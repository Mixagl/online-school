import CourseForm from "../../course-form";

export default function Page() {
  return (
    <section className="w-full bg-background pt-32 pb-32">
      <div className="mx-auto container px-5 max-w-2xl">
        <CourseForm />
      </div>
    </section>
  );
}

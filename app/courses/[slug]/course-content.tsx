"use client";

import { Course } from "@/db/schema";
import { useState } from "react";

interface Props {
  course: Course;
}

export default function CourseContent({ course }: Props) {
  const [activeLesson, setActiveLesson] = useState(course.lessons[0]);
  return (
    <section className="w-full bg-background pt-32 pb-32">
      <div className="mx-auto container px-2 flex flex-col items-start gap-3 lg:flex-row">
        <div className="flex flex-col gap-5 w-full">
          {activeLesson.videoUrl ? (
            <div className="w-full aspect-video">
              <iframe
                src={activeLesson.videoUrl || ""}
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media;"
                allowFullScreen
                className="w-full rounded-2xl h-full"
              ></iframe>
            </div>
          ) : (
            <div className="w-full aspect-video bg-accent rounded-2xl flex items-center justify-center">
              <span className="text-muted-foreground">
                Видео пока недоступно
              </span>
            </div>
          )}

          <div className="bg-background w-full flex flex-col gap-5">
            <span className="text-foreground text-2xl font-bold">
              {activeLesson.title}
            </span>
            <p className="text-foreground text-base">{activeLesson.content}</p>
          </div>
        </div>

        <ul className="flex flex-col gap-3 w-full bg-background lg:w-150">
          {course?.lessons.map((lesson) => (
            <li
              key={lesson.id}
              className={`p-2 flex gap-3 cursor-pointer items-center ${lesson.id === activeLesson.id && "bg-primary rounded-2xl"}`}
              onClick={() => setActiveLesson(lesson)}
            >
              <span
                className={`flex items-center justify-center text-foreground bg-background border-2 border-muted w-10 h-10 rounded-full`}
              >
                {lesson.order}
              </span>
              <span
                className={`text-base ${lesson.id === activeLesson.id ? "text-background" : "text-foreground"}`}
              >
                {lesson.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

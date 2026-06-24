"use client";

import { useState } from "react";
import { Play, BookOpen, ChevronRight, MonitorPlay } from "lucide-react";
import { Course, Lesson } from "@/db/schema";

interface Props {
  course: Course;
}

export default function CourseContent({ course }: Props) {
  const [activeLesson, setActiveLesson] = useState<Lesson>(course.lessons[0]);

  return (
    <section className="w-full bg-zinc-50 dark:bg-black pt-20 pb-20 md:pt-24 md:pb-24 font-sans">
      {/* Главный рабочий контейнер дашборда */}
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-10 lg:flex-row items-start w-full">
        {/* ЛЕВАЯ ЧАСТЬ: Кинематографичный плеер и теория урока */}
        <div className="flex flex-col gap-8 w-full lg:flex-1">
          {/* Контейнер видео в стиле Apple TV (Экстремальный радиус, глубокая мягкая тень) */}
          <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden border border-black/4 dark:border-white/6 shadow-[0_30px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative group">
            {activeLesson.videoUrl ? (
              <iframe
                src={activeLesson.videoUrl}
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media;"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              /* Минималистичная Zinc-заглушка плеера */
              <div className="absolute inset-0 bg-linear-to-b from-zinc-900 to-zinc-950 flex flex-col items-center justify-center gap-3 select-none">
                <div className="p-4 bg-zinc-900/60 border border-white/6 rounded-full text-zinc-400 group-hover:scale-105 transition-transform duration-500 ease-out backdrop-blur-md">
                  <Play className="w-6 h-6 ml-0.5 fill-current text-zinc-300" />
                </div>
                <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase">
                  Видео готовится к публикации
                </span>
              </div>
            )}
          </div>

          {/* Метаданные и Заголовок текущего лекционного блока */}
          <div className="flex flex-col gap-3 w-full border-b border-black/6 dark:border-white/6 pb-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
              <span>Урок {activeLesson.order}</span>
              <span className="text-zinc-300 dark:text-zinc-800">•</span>
              <span>Модуль 1</span>
            </div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight sm:text-3xl lg:text-4xl leading-tight">
              {activeLesson.title}
            </h1>
          </div>

          {/* Текстовая база знаний (Оптимизирована под Apple Typography) */}
          <div className="w-full text-zinc-600 dark:text-zinc-300 max-w-none prose dark:prose-invert prose-zinc text-base leading-relaxed font-normal tracking-tight">
            {activeLesson.content}
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Навигационный Сайдбар в стиле macOS Sidebar */}
        <div className="w-full lg:w-80 xl:w-96 shrink-0 border border-black/4 dark:border-white/6 bg-white/70 dark:bg-zinc-900/30 backdrop-blur-2xl rounded-3xl p-5 flex flex-col gap-5 sticky top-20 shadow-xs">
          {/* Шапка Сайдбара */}
          <div className="flex items-center justify-between border-b border-black/4 dark:border-white/6 pb-4">
            <h2 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 tracking-widest uppercase flex items-center gap-2">
              <BookOpen
                className="w-4 h-4 text-zinc-400 dark:text-zinc-500"
                strokeWidth={1.5}
              />
              Программа
            </h2>
            <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 rounded-full tracking-tight">
              {course?.lessons.length} уроков
            </span>
          </div>

          {/* Список занятий */}
          <ul className="flex flex-col gap-1 w-full overflow-y-auto max-h-[55vh] pr-1 scrollbar-none">
            {course?.lessons.map((lesson) => {
              const isActive = lesson.id === activeLesson.id;
              return (
                <li
                  key={lesson.id}
                  onClick={() => setActiveLesson(lesson)}
                  className={`group w-full p-3 flex items-center justify-between gap-3 cursor-pointer rounded-2xl border transition-all duration-300 ease-out ${
                    isActive
                      ? "bg-zinc-100 dark:bg-zinc-800/80 border-transparent shadow-xs"
                      : "bg-transparent border-transparent hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Квадратный индикатор статуса/типа урока в стиле macOS Finder */}
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-xl shrink-0 transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white dark:bg-blue-500 shadow-xs"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700"
                      }`}
                    >
                      {isActive ? (
                        <MonitorPlay className="w-4 h-4 stroke-2" />
                      ) : (
                        <span className="font-semibold text-xs tracking-tight">
                          {lesson.order}
                        </span>
                      )}
                    </div>

                    {/* Название лекции */}
                    <span
                      className={`text-sm tracking-tight font-medium truncate ${
                        isActive
                          ? "text-zinc-950 dark:text-zinc-50 font-semibold"
                          : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200"
                      }`}
                    >
                      {lesson.title}
                    </span>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-300 ease-out ${
                      isActive
                        ? "text-zinc-400 dark:text-zinc-500 translate-x-0"
                        : "text-zinc-300 dark:text-zinc-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

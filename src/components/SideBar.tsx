import { useGetLessonsQuery } from "../graphql/generated";
import { LessonCard } from "./LessonCard";


interface GetLessonQuery {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

export function SideBar() {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="w-[348px] bg-darkGray-700 p-6 border-l border-darkGray-600">
      <span className="font-bold text-2xl pb-6 text-white mb-6 border-b border-darkGray-500 block">
        Cronograma de Aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            title={lesson.title}
            videoSlug={lesson.slug}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  );
}

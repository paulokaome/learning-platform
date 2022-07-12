import classNames from "classnames";
import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  videoSlug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function LessonCard({
  availableAt,
  videoSlug,
  title,
  type,
}: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt);
  const availableDataFormatted = format(
    availableAt,
    "EEEE ' • ' d 'de' MMMM ' • ' k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === videoSlug;

  return (
    <Link to={`/events/lesson/${videoSlug}`} className="group">
      <span className="text-darkGray-300">{availableDataFormatted}</span>

      <div
        className={classNames(
          "rounded border border-darkGray-500 p-4 m-2 group-hover:border-darkGreen-500",
          { "bg-darkGreen-500": isActiveLesson }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm font-medium flex items-center gap-1",
                {
                  "text-white": isActiveLesson,
                  "text-darkBlue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm text-darkWarning-500 font-medium flex items-center gap-1">
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span className={classNames("text-xs rounded px-2 py-[2px] text-white border  font-bold" ,{
            "border-darkGreen-500" : !isActiveLesson,
            "border-white" : isActiveLesson
          })}>
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={classNames("mt-5 block text-sm", {
            "text-white": isActiveLesson,
            "text-darkGray-200": !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}

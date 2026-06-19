import { useState } from "react";
import type { ICurriculum } from "../../interface";
import CourseLesson from "./CourseLesson";

interface IProps {
  curriculum: ICurriculum,
  idx: number
}


const CourseCurriculum = ({ curriculum, idx }: IProps) => {
  const [activeLesson, setActiveLesson] = useState("");

  return (
    <div className="bg-white px-6 py-10 rounded-xl" key={idx} >
      <h1 className="text-5xl text-right font-bold mb-8">{String(idx + 1).padStart(2, "0")}</h1>
      <h3 className="text-2xl font-semibold mb-5">{curriculum.title}</h3>
      <ul className="space-y-6">
        {curriculum.lessons.map((lesson, index) => (
          <CourseLesson
            lesson={lesson} idx={index}
            activeLesson={activeLesson} setActiveLesson={setActiveLesson}
            key={index} />
        ))}
      </ul>
    </div>
  )
}

export default CourseCurriculum
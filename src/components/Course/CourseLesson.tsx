import { CiClock2 } from "react-icons/ci"
import type { ILesson } from "../../interface"

interface IProps {
  lesson: ILesson,
  activeLesson: string,
  setActiveLesson: (val: string) => void
  idx: number
}

const CourseLesson = ({ lesson, activeLesson, setActiveLesson, idx }: IProps) => {
  return (
    <li className={`p-6 border  rounded-md flex items-center justify-between flex-wrap gap-5 cursor-pointer
        ${activeLesson === lesson.title ? "border-orange-300 shadow-md shadow-orange-100" : "border-gray-200"}`}
      onClick={() => setActiveLesson(lesson.title)}>
      <div>
        <h5 className="text-xl font-medium mb-2 max-w-sm">{lesson.title}</h5>
        <p className="text-lg text-gray-600">
          Lesson {String(idx + 1).padStart(2, "0")}
        </p>
      </div>
      <span className={`text-gray-600 text-sm font-medium px-3 py-2 rounded-md flex items-center gap-1 w-fit
        ${activeLesson === lesson.title ? "bg-orange-100" : "bg-gray-100"}`}>
        <CiClock2 />
        {lesson.duration}
      </span>
    </li>
  )
}

export default CourseLesson
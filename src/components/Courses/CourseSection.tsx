import type { ICourse } from "../../interface"
import Button from "../ui/Button"
import CurriculumItem from "./CurriculumItem"



const CourseSection = ({ course }: { course: ICourse }) => {
  return (
    <div className="course bg-white p-6 rounded-md" key={course.id}>
      <h2 className="text-2xl font-bold mb-5">
        {course.title}
      </h2>
      <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between gap-y-6 mb-5">
        <p className="max-w-xl 2xl:max-w-4xl text-gray-600">
          {course.description}
        </p>
        <Button href={`/courses/${course.id}`} className="text-gray-800! bg-gray-50! border border-gray-200 transition-all duration-300 hover:bg-orange-400! hover:text-white!">
          View Course
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center mb-5">
        <div>
          <img src={course.image} alt={course.title} />
        </div>
        <div>
          <img src={course.image} alt={course.title} />
        </div>
        <div>
          <img src={course.image} alt={course.title} />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-5">
        <span className="bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-md">
          {course.level}
        </span>
        <span className="text-gray-500 border border-gray-100 text-sm px-3 py-1 rounded-md">
          {course.duration}
        </span>
        <span className="text-gray-800 font-medium text-sm px-3 py-1 rounded-md ml-auto">
          By {course.instructor}
        </span>
      </div>
      <div className="border border-gray-200 rounded-md">
        <h3 className="text-xl font-semibold mb-2 p-4 border-b border-gray-200">
          Curriculum
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center p-6 gap-4">
          {course.curriculum.map((item, index) => (
            <CurriculumItem title={item.title} index={index} key={index} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CourseSection


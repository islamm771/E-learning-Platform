import { useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { useParams } from "react-router";
import Hero2 from "../components/Hero2";
import { coursesData } from "../data";

const CoursePage = () => {
  const { courseId } = useParams()
  const [activeLesson, setActiveLesson] = useState("");

  const course = coursesData.find(
    course => course.id === Number(courseId)
  );
  return (
    <>
      <Hero2>
        <h2 className="text-4xl font-bold">
          {course?.title}
        </h2>
        <p className="text-gray-600">
          {course?.description}
        </p>
      </Hero2>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
        <div className="videoplayer">
          <video src="https://placeholdervideo.dev/1920x1080" className="rounded-md" controls poster="/imgs/course-img.png"></video>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {course?.curriculum.map((curr, idxx) => (
            <div className="bg-white px-6 py-10 rounded-xl" key={idxx} >
              <h1 className="text-5xl text-right font-bold mb-8">{String(idxx + 1).padStart(2, "0")}</h1>
              <h3 className="text-2xl font-semibold mb-5">{curr.title}</h3>
              <ul className="space-y-6">
                {curr.lessons.map((lesson, idx) => (
                  <li className={`p-6 border  rounded-md flex items-center justify-between flex-wrap gap-5 cursor-pointer
                    ${activeLesson === lesson.title ? "border-orange-300 shadow-md shadow-orange-100" : "border-gray-200"}`}
                    key={idx + 99} onClick={() => setActiveLesson(lesson.title)}>
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
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default CoursePage
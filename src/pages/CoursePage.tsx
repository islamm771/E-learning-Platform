import { useParams } from "react-router";
import CourseCurriculum from "../components/Course/CourseCurriculum";
import Hero2 from "../components/Hero2";
import { coursesData } from "../data";

const CoursePage = () => {
  const { courseId } = useParams()
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
          {course?.curriculum.map((curr, idx) => (
            <CourseCurriculum curriculum={curr} idx={idx} key={idx} />
          ))}
        </div>

      </div>
    </>
  )
}

export default CoursePage
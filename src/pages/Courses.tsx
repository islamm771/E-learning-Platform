import CourseSection from "../components/Courses/CourseSection"
import Hero2 from "../components/Hero2"
import { coursesData } from "../data"




const CoursesPage = () => {
  return (
    <>
      <Hero2>
        <h2 className="text-4xl font-bold">
          Online Courses on Design and Development
        </h2>
        <p className="text-gray-600">
          Welcome to our online course page, where you can enhance your skills in design and development.
          Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge
          and practical experience. Explore the courses below and find the perfect fit for your learning journey.
        </p>
      </Hero2>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20 space-y-12">
        {coursesData.map((course) => (
          <CourseSection course={course} />
        ))}
      </div>
    </>
  )
}

export default CoursesPage
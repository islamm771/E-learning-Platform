import Button from "../components/Button"
import { coursesData } from "../data"




const CoursesPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <h2 className="text-4xl font-bold">
            Online Courses on Design and Development
          </h2>
          <p className="text-gray-600">
            Welcome to our online course page, where you can enhance your skills in design and development.
            Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge
            and practical experience. Explore the courses below and find the perfect fit for your learning journey.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20 space-y-12">
        {coursesData.map((course) => (
          <div className="course bg-white p-6 rounded-md" key={course.id}>
            <h2 className="text-2xl font-bold mb-5">
              {course.title}
            </h2>
            <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between gap-y-6 mb-5">
              <p className="max-w-xl 2xl:max-w-4xl text-gray-600">
                {course.description}
              </p>
              <Button href={`/courses/${course.id}`} className="text-gray-800! bg-gray-50! border border-gray-200">
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
                  <li className="border-b md:border-r md:border-b-0 border-gray-200 py-4 md:px-4" key={index}>
                    <h1 className="text-5xl font-bold mb-2">{String(index + 1).padStart(2, '0')}</h1>
                    <p className="text-gray-800 text-md font-medium">
                      {item.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CoursesPage
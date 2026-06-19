import { Link } from "react-router"
import { coursesData } from "../../data"
import Button from "../ui/Button"

const OurCourses = () => {
  return (
    <div className="our-courses">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
        <h2 className="text-3xl font-semibold mb-5">Our Courses</h2>
        <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between gap-y-6">
          <p className="max-w-2xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sunt tempore culpa recusandae,
            explicabo, natus beatae nemo odio quod minus numquam
            excepturi architecto commodi accusantium voluptas corrupti
            dolorum vitae asperiores fugit.
          </p>
          <Button href="/courses" className="text-gray-800! bg-gray-50! border border-gray-200 transition-all duration-300 hover:bg-orange-400! hover:text-white!">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {coursesData.map((course) => (
            <div className="group bg-white shadow-sm px-6 py-10 rounded-xl" key={course.id}>
              <div className="overflow-hidden mb-5 rounded-lg">
                <img className="group-hover:scale-150 transition-transform duration-300" src={course.image} alt={course.title} />
              </div>
              <div className="flex items-center gap-4 mb-5">
                <span className="bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-md">
                  {course.level}
                </span>
                <span className="text-gray-500 border border-gray-100 text-sm px-3 py-1 rounded-md">
                  {course.duration}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 hover:text-orange-400">{course.title}</h3>
              <p className="text-gray-600 mb-5">
                {course.description}
              </p>
              <Link to={`/courses/${course.id}`} className="block w-full bg-gray-100 text-gray-800 text-sm font-medium text-center px-4 py-4 rounded-md cursor-pointer">
                Get it Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurCourses
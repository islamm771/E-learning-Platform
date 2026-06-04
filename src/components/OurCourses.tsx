import Button from "./Button"

const coursesData = [
  {
    id: 1,
    title: "Web Design Fundamentals",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    level: "Beginner",
    duration: "4 weeks",
    image: "/imgs/course1.png"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    level: "Intermediate",
    duration: "6 weeks",
    image: "/imgs/course2.png"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    level: "Advanced",
    duration: "8 weeks",
    image: "/imgs/course3.png"
  },
  {
    id: 4,
    title: "Graphic Design for Beginners",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    level: "Beginner",
    duration: "10 weeks",
    image: "/imgs/course4.png"
  },
  {
    id: 5,
    title: "Front-End Web Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    level: "Intermediate",
    duration: "10 weeks",
    image: "/imgs/course5.png"
  },
  {
    id: 6,
    title: "Advanced JavaScript",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    level: "Advanced",
    duration: "6 weeks",
    image: "/public/imgs/course6.png"
  }
]

const OurCourses = () => {
  return (
    <div className="our-courses">
      <div className="container mx-auto px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
        <h2 className="text-3xl font-semibold mb-5">Our Courses</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-6">
          <p className="max-w-2xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sunt tempore culpa recusandae,
            explicabo, natus beatae nemo odio quod minus numquam
            excepturi architecto commodi accusantium voluptas corrupti
            dolorum vitae asperiores fugit.
          </p>
          <Button href="/courses" className="bg-white text-gray-800 ml-4 border border-gray-100">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {coursesData.map((course) => (
            <div className="bg-white shadow-sm px-6 py-10 rounded-xl" key={course.id}>
              <div className="overflow-hidden mb-5 rounded-lg">
                <img className="hover:scale-150 transition-transform duration-300" src={course.image} alt={course.title} />
              </div>
              <div className="flex items-center gap-4 mb-5">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-md">
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
              <a href="/courses" className="block w-full bg-gray-100 text-gray-800 text-sm font-medium text-center px-4 py-4 rounded-md cursor-pointer">
                Get it Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurCourses
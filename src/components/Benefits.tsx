import Button from "./Button"

const benefitsData = [
  {
    id: 1,
    title: "Flexible Learning Schedule",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 2,
    title: "Expert Instructors",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 3,
    title: "Diverse Course Offerings",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 4,
    title: "Updated Curriculum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 5,
    title: "Practical Projects and Assignments",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 6,
    title: "Interactive Learning Environment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
]

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="container mx-auto px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
        <h2 className="text-3xl font-semibold mb-5">Benefits</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-6">
          <p className="max-w-2xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sunt tempore culpa recusandae,
            explicabo, natus beatae nemo odio quod minus numquam
            excepturi architecto commodi accusantium voluptas corrupti
            dolorum vitae asperiores fugit.
          </p>
          <Button href="/benefits" className="bg-white text-gray-800 ml-4 border border-gray-100">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
          {benefitsData.map((benefit) => (
            <div className="bg-white px-6 py-10 rounded-xl" key={benefit.id}>
              <h1 className="text-5xl text-right font-bold mb-8">{benefit.id.toString().padStart(2, '0')}</h1>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Benefits
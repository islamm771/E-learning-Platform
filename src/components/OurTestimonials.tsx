import Button from "./Button"

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    image: "/imgs/testimonial1.png",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore culpa recusandae, explicabo, natus beatae nemo odio quod minus numquam excepturi architecto commodi accusantium voluptas corrupti dolorum vitae asperiores fugit."
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/imgs/testimonial2.png",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore culpa recusandae, explicabo, natus beatae nemo odio quod minus numquam excepturi architecto commodi accusantium voluptas corrupti dolorum vitae asperiores fugit."
  }
]


const OurTestimonials = () => {
  return (
    <div className="our-testimonials">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
        <h2 className="text-3xl font-semibold mb-5">Our Testimonials</h2>
        <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between gap-y-6">
          <p className="max-w-2xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sunt tempore culpa recusandae,
            explicabo, natus beatae nemo odio quod minus numquam
            excepturi architecto commodi accusantium voluptas corrupti
            dolorum vitae asperiores fugit.
          </p>
          <Button href="/courses" className="text-gray-800 bg-gray-50 border border-gray-200">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {testimonialsData.map((testimonial) => (
            <div className="bg-white shadow-sm rounded-xl" key={testimonial.id}>
              <p className="text-gray-600 py-8 px-6">
                {testimonial.feedback}
              </p>
              <div className="flex items-center gap-4 bg-gray-100 px-6 py-4">
                <img className="" src={testimonial.image} alt={testimonial.name} />
                <h3 className="text-md font-semibold">{testimonial.name}</h3>
                <button className="border border-gray-200 text-gray-800 font-medium px-4 py-2 rounded-md ml-auto cursor-pointer">
                  Read Full Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTestimonials
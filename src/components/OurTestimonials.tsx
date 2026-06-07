import { testimonialsData } from "../data"
import Button from "./Button"
import UserTestimonial from "./UserTestimonial"


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
          <Button href="/courses" className="text-gray-800! bg-gray-50! border border-gray-200">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {testimonialsData.map((testimonial) => (
            <UserTestimonial testimonial={testimonial} key={testimonial.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTestimonials
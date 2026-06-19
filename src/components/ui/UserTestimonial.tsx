import type { ITestimonial } from "../../interface"

interface IProps {
  testimonial: ITestimonial
}

const UserTestimonial = ({ testimonial }: IProps) => {
  return (
    <div className="bg-white shadow-sm rounded-xl">
      <p className="text-gray-600 py-8 px-6">
        {testimonial.feedback}
      </p>
      <div className="flex items-center gap-4 bg-gray-100 px-6 py-4">
        <img className="w-12 h-12 rounded-md object-cover shrink-0" src={testimonial.image} alt={testimonial.name} />
        <h3 className="text-md font-semibold">{testimonial.name}</h3>
        <button className="border border-gray-200 text-gray-800 font-medium px-4 py-2 rounded-md ml-auto cursor-pointer">
          Read Full Story
        </button>
      </div>
    </div>
  )
}

export default UserTestimonial
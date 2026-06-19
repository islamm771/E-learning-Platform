import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonialsData } from "../data";
import UserTestimonial from "./ui/UserTestimonial";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const StudentsTestimonial = () => {
  return (
    <>
      <h2 className="text-4xl font-medium mb-3">
        Students Testimonials
      </h2>
      <p className="text-gray-600 mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ea, veritatis voluptas. Laboriosam incidunt obcaecati temporibus
        iste dolorem fuga veritatis officiis quis eveniet doloremque ea sed,
        maiores consequuntur, consectetur commodi deserunt?
      </p>
      <Swiper
        className="w-full min-w-0"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <UserTestimonial testimonial={testimonial} />
          </SwiperSlide>
        ))
        }
      </Swiper>

      <div className="flex items-center justify-end gap-4 mt-6">
        <span className="custom-prev bg-white rounded p-3 text-gray-600 block w-fit cursor-pointer">
          <FaArrowLeft size={20} />
        </span>

        <span className="custom-next bg-white rounded p-3 text-gray-600 block w-fit cursor-pointer">
          <FaArrowRight size={20} />
        </span>
      </div>
    </>
  )
}

export default StudentsTestimonial
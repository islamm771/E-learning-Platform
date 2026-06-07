import { FaArrowLeft, FaArrowRight, FaCheck, FaEye } from "react-icons/fa";
import UserTestimonial from "../components/UserTestimonial";
import { testimonialsData } from "../data";
// import Swiper and modules styles
import { useState } from "react";
import { Link } from "react-router";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../components/Button";


const LoginPage = () => {
  const [isPassord, setIsPassord] = useState(true);
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
      <div className="grid lg:grid-cols-2 gap-32">

        <div className="min-w-0 order-2 lg:order-1">
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
        </div>
        <div className="order-1 lg:order-2">
          <div className="bg-white p-6 rounded-md">
            <div className="text-center">
              <h5 className="text-3xl font-semibold mb-3">
                Login
              </h5>
              <p className="text-gray-600 mb-12">
                Welcome back! Please log in to access your account.
              </p>
            </div>
            <form action="" className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="" className="font-semibold mb-2">Email</label>
                <input type="email" className="bg-gray-50 border border-gray-200 p-3 rounded-md" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col text-start relative">
                <label htmlFor="" className="font-semibold mb-2">Passoword</label>
                <input type={isPassord ? "password" : "text"} className="bg-gray-50 border border-gray-200 p-3 rounded-md" placeholder="Enter your password" />
                <span className="bg-gray-100 w-fit p-2 rounded absolute top-10 hover:bg-gray-200 right-4 cursor-pointer" onClick={() => setIsPassord(prev => !prev)}>
                  <FaEye />
                </span>
              </div>
              <Link to="#" className="text-gray-600 block w-fit ml-auto">Forgot Password ?</Link>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="peer hidden" />
                <span className="flex h-5 w-5 items-center justify-center rounded border border-gray-200 bg-gray-50 peer-checked:border-orange-500 peer-checked:bg-orange-500">
                  <FaCheck
                    size={10}
                    className="text-white opacity-0 peer-checked:opacity-100"
                  />
                </span>
                <span className="text-gray-600">
                  Remember Me
                </span>
              </label>
              <Button className="block w-full text-center">Login</Button>
            </form>
            <div className="or py-8 relative">
              <div className="w-full h-0.5 bg-gray-200"></div>
              <span className="p-2 bg-white text-gray-400 absolute top-1/2 left-1/2 -translate-1/2">OR</span>
            </div>
            <button className="sign-with-google flex items-center gap-3 justify-center text-gray-800 bg-gray-50 border border-gray-200 px-3 py-4 rounded-md w-full mb-4">
              <img src="/imgs/google-icon.png" alt="" />
              <span>Login with Google</span>
            </button>
            <p className="text-center">
              Don’t have an account? <Link to="/sign-up" className="font-medium underline">Sign Up</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginPage
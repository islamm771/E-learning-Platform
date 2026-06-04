import { FaPhoneAlt, FaTwitter } from "react-icons/fa"
import { FaFacebookF, FaLinkedinIn, FaLocationDot } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"
import Benefits from "./components/Benefits"
import FAQs from "./components/FAQs"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OurCourses from "./components/OurCourses"
import OurPricing from "./components/OurPricing"
import OurTestimonials from "./components/OurTestimonials"

function App() {
  return (
    <>
      <div className='bg-orange-400 text-white text-center p-2'>
        Free Courses 🌟 Sale Ends Soon, Get It Now
      </div>
      <Navbar />
      <Hero />
      <div>
        <div className="container mx-auto px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
          <div className="bg-white grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 gap-10 p-10 rounded-md">
            <div>
              <img className="block mx-auto" src="/imgs/logos/zapier.png" alt="" />
            </div>
            <div>
              <img className="block mx-auto" src="/imgs/logos/spotify.png" alt="" />
            </div>
            <div>
              <img className="block mx-auto" src="/imgs/logos/zoom.png" alt="" />
            </div>
            <div>
              <img className="block mx-auto" src="/imgs/logos/amazon.png" alt="" />
            </div>
            <div>
              <img className="block mx-auto" src="/imgs/logos/adobe.png" alt="" />
            </div>
            <div>
              <img className="block mx-auto" src="/imgs/logos/notion.png" alt="" />
            </div>
            <div>
              <img className="block mx-auto" src="/imgs/logos/netflix.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Benefits />
      <OurCourses />
      <OurTestimonials />
      <OurPricing />
      <FAQs />
      <footer className="bg-white">
        <div className="container mx-auto px-8 lg:px-16 xl:px-20 2xl:px-24 pt-20 pb-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <div className="size-12 rounded-md bg-orange-400 md:mr-8 p-2 flex items-center justify-center flex-col mb-6">
                <span className="block w-1/2 h-2 bg-white skew-x-320"></span>
                <span className="block w-1/2 h-2 bg-white -skew-x-320"></span>
                <span className="block w-1/2 h-2 bg-white skew-x-320"></span>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center text-gray-600">
                  <IoMdMail />
                  <span className="ml-2">support@edusite.com</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <FaPhoneAlt />
                  <span className="ml-2">+91 91813 23 2309</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <FaLocationDot />
                  <span className="ml-2">Somewhere in the World</span>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Home</h3>
              <ul className="flex flex-col gap-2 text-gray-600">
                <li>Benefits</li>
                <li>Our Courses</li>
                <li>Our Testimonials</li>
                <li>Our Pricing</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="flex flex-col gap-2 text-gray-600">
                <li>Company</li>
                <li>Achievements</li>
                <li>Our Goals</li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Social Profiles</h3>
              <ul className="flex gap-4 text-gray-600">
                <li className="bg-gray-100 p-2 rounded-sm"> <FaFacebookF />  </li>
                <li className="bg-gray-100 p-2 rounded-sm"> <FaTwitter />  </li>
                <li className="bg-gray-100 p-2 rounded-sm"> <FaLinkedinIn />  </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 pt-8 border-t border-gray-200 mt-8">
            &copy; 2023 Skillbridge. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

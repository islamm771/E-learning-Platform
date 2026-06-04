import { FaTimes } from "react-icons/fa"
import { FaCheck } from "react-icons/fa6"
import Button from "./Button"

// const pricingFeatures = {
//   free: [
//     "Access to selected free courses.",
//     "Basic community support.",
//     "Limited course materials and resources.",
//     "No certification upon completion.",
//     "Ad-supported platform.",
//     "Access to exclusive Pro Plan community forums.",
//     "Early access to new courses and updates.",
//   ],
//   pro: [
//     "Access to all courses.",
//     "Exclusive Pro Plan community forums.",
//     "Priority customer support."
//   ]
// }

const OurPricing = () => {
  return (
    <div className="our-pricing">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
        <h2 className="text-3xl font-semibold mb-5">Our Pricing</h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 lg:p-10">
          <div className="free-plan border border-gray-200 bg-white/25 rounded-xl p-4">
            <span className="bg-orange-100 border border-orange-200 rounded block w-full px-4 py-2 text-center capitalize font-medium">free Plan</span>
            <h3 className="text-5xl font-bold py-6 text-center text-gray-800">
              $0<span className="text-gray-600 text-sm font-normal">/month</span>
            </h3>
            <ul className="text-gray-600 bg-white py-6 rounded-t-md border border-gray-200 border-b-0 flex flex-col gap-4">
              <li className="text-gray-800 text-lg text-center mb-4 font-medium">Available Features</li>
              <li className="flex items-center gap-2 mx-4 md:mx-10 bg-white/25 border border-gray-200 rounded-md p-2">
                <span className="bg-orange-100 rounded p-1 text-gray-500">
                  <FaCheck />
                </span>
                <span className="text-gray-800 text-md">Access to selected free courses.</span>
              </li>
              <li className="flex items-center gap-2 mx-4 md:mx-10 bg-white/25 border border-gray-200 rounded-md p-2">
                <span className="bg-orange-100 rounded p-1 text-gray-500">
                  <FaCheck />
                </span>
                <span className="text-gray-800 text-md">Access to selected free courses.</span>
              </li>
              <li className="flex items-center gap-2 mx-4 md:mx-10 bg-white/25 border border-gray-200 rounded-md p-2">
                <span className="bg-orange-100 rounded p-1 text-gray-500">
                  <FaCheck />
                </span>
                <span className="text-gray-800 text-md">Access to selected free courses.</span>
              </li>
              <li className="flex items-center gap-2 mx-4 md:mx-10 bg-white/25 border border-gray-200 rounded-md p-2">
                <span className="bg-orange-100 rounded p-1 text-gray-500">
                  <FaCheck />
                </span>
                <span className="text-gray-800 text-md">Access to selected free courses.</span>
              </li>
              <li className="flex items-center gap-2 mx-4 md:mx-10 bg-white/25 border border-gray-200 rounded-md p-2">
                <span className="bg-orange-100 rounded p-1 text-gray-500">
                  <FaCheck />
                </span>
                <span className="text-gray-800 text-md">Access to selected free courses.</span>
              </li>
              <li className="flex items-center gap-2 mx-4 md:mx-10 bg-white/25 border border-gray-200 rounded-md p-2">
                <span className="bg-white border border-gray-200 rounded p-1 text-gray-500">
                  <FaTimes />
                </span>
                <span className="text-gray-800 text-md">Access to exclusive Pro Plan community forums.</span>
              </li>
            </ul>
            <Button href="/courses" className="bg-orange-400 text-white w-full rounded-none rounded-b-md block text-center py-4 font-medium">
              Get Started
            </Button>
          </div>
          <div className="pro-plan border border-gray-200 bg-white/25 rounded-xl p-4">
            <span className="bg-orange-100 border border-orange-200 rounded block w-full px-4 py-2 text-center capitalize font-medium">pro Plan</span>
            <h3 className="text-5xl font-bold py-6 text-center text-gray-800">
              $79<span className="text-gray-600 text-sm font-normal">/month</span>
            </h3>
            <ul className="text-gray-600 bg-white py-6 rounded-t-md border border-gray-200 border-b-0 flex flex-col gap-4">
              <li className="text-gray-800 text-lg text-center mb-4 font-medium">Available Features</li>
              <li className="flex items-center gap-2 mx-4 md:mx-10 bg-white/25 border border-gray-200 rounded-md p-2">
                <span className="bg-orange-100 rounded p-1 text-gray-500">
                  <FaCheck />
                </span>
                <span className="text-gray-800 text-md">Access to selected free courses.</span>
              </li>
              <li className="flex items-center gap-2 mx-4 md:mx-10 bg-white/25 border border-gray-200 rounded-md p-2">
                <span className="bg-orange-100 rounded p-1 text-gray-500">
                  <FaCheck />
                </span>
                <span className="text-gray-800 text-md">Access to selected free courses.</span>
              </li>
              <li className="flex items-center gap-2 mx-4 md:mx-10 bg-white/25 border border-gray-200 rounded-md p-2">
                <span className="bg-orange-100 rounded p-1 text-gray-500">
                  <FaCheck />
                </span>
                <span className="text-gray-800 text-md">Access to selected free courses.</span>
              </li>
              <li className="flex items-center gap-2 mx-4 md:mx-10 bg-white/25 border border-gray-200 rounded-md p-2">
                <span className="bg-orange-100 rounded p-1 text-gray-500">
                  <FaCheck />
                </span>
                <span className="text-gray-800 text-md">Access to selected free courses.</span>
              </li>
              <li className="flex items-center gap-2 mx-4 md:mx-10 bg-white/25 border border-gray-200 rounded-md p-2">
                <span className="bg-orange-100 rounded p-1 text-gray-500">
                  <FaCheck />
                </span>
                <span className="text-gray-800 text-md">Access to selected free courses.</span>
              </li>
              <li className="flex items-center gap-2 mx-4 md:mx-10 bg-white/25 border border-gray-200 rounded-md p-2">
                <span className="bg-orange-100 rounded p-1 text-gray-500">
                  <FaCheck />
                </span>
                <span className="text-gray-800 text-md">Access to exclusive Pro Plan community forums.</span>
              </li>
            </ul>
            <Button href="/courses" className="bg-orange-400 text-white w-full rounded-none rounded-b-md block text-center py-4 font-medium">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPricing
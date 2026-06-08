import { useState } from "react"
import { FaCheck, FaTimes } from "react-icons/fa"
import Button from "../components/Button"
import FAQs from "../components/FAQs"
import Hero2 from "../components/Hero2"

const PricingsPage = () => {
  const [pricing, setPricing] = useState("monthly");
  const handlePricing = (p: string) => {
    setPricing(p)
  }
  return (
    <>
      <Hero2>
        <h2 className="text-4xl font-bold">
          Our Pricings
        </h2>
        <p className="text-gray-600">
          Welcome to SkillBridge's Pricing Plan page,
          where we offer two comprehensive options to cater to your needs:
          Free and Pro. We believe in providing flexible and affordable pricing
          options for our services. Whether you're an individual looking to
          enhance your skills or a business seeking professional development
          solutions, we have a plan that suits you. Explore our pricing options
          below and choose the one that best fits your requirements.
        </p>
      </Hero2>
      <div className="p-2 mt-12 w-fit mx-auto bg-white rounded-md">
        <button className={`px-5 py-3 rounded-md text-gray-800 cursor-pointer ${pricing === "monthly" ? "bg-orange-400 text-white" : ""}`}
          onClick={() => handlePricing("monthly")}>Monthly</button>
        <button className={`px-5 py-3 rounded-md text-gray-800 cursor-pointer ${pricing === "yearly" ? "bg-orange-400 text-white" : ""}`}
          onClick={() => handlePricing("yearly")}>Yearly</button>
      </div>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 pt-20">
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-6 lg:p-10 rounded-md">
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
      <FAQs />
    </>
  )
}

export default PricingsPage
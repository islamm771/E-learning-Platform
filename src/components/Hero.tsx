import Button from "./Button"

const Hero = () => {
  return (
    <div className="container mx-auto xl:px-20 2xl:px-24 flex items-center justify-center py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          <span className="text-orange-400">Unlock</span> Your Creative Potential
        </h2>
        <h4 className="text-2xl font-semibold mt-6 mb-2">
          with Online Design and Development Courses.
        </h4>
        <p className="text-gray-600">Learn from Industry Experts and Enhance Your Skills.</p>
        <div className="mt-6">
          <Button href="/course" className="bg-orange-400 text-white">
            Explore Courses
          </Button>
          <Button href="/pricings" className="bg-white text-gray-800 ml-4 border border-gray-100">
            View Pricing
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
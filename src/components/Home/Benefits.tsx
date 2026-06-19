import { benefitsData } from "../../data"
import BenefitCard from "../ui/BenefitCard"
import Button from "../ui/Button"

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
        <h2 className="text-3xl font-semibold mb-5">Benefits</h2>
        <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between gap-y-6">
          <p className="max-w-2xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sunt tempore culpa recusandae,
            explicabo, natus beatae nemo odio quod minus numquam
            excepturi architecto commodi accusantium voluptas corrupti
            dolorum vitae asperiores fugit.
          </p>
          <Button href="#"
            className="text-gray-800! bg-gray-50! border border-gray-200 transition-all duration-300 hover:bg-orange-400! hover:text-white!">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
          {benefitsData.map((benefit) => (
            <BenefitCard benefit={benefit} key={benefit.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Benefits
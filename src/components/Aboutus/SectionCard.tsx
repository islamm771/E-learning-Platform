import type { IAboutItem } from "../../interface"

const SectionCard = ({ title, itemIcon: Icon, description }: IAboutItem) => {
  return (
    <div className="bg-white px-6 py-10 rounded-xl space-y-5 border border-white transition-all duration-300 hover:border-orange-400 hover:shadow-xl hover:shadow-gray-200">
      <span className="bg-orange-100 rounded p-3 text-orange-500 border border-orange-200 block w-fit cursor-pointer">
        <Icon size={25} />
      </span>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-md text-gray-600">
        {description}
      </p>
    </div>
  )
}

export default SectionCard
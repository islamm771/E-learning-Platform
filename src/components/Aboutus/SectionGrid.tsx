import type { IAboutItem } from "../../interface"
import SectionCard from "./SectionCard"

interface IProps {
  aboutItems: IAboutItem[]
}

const SectionGrid = ({ aboutItems }: IProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
      {aboutItems.map((item, idx) => (
        <SectionCard {...item} key={idx} />
      ))}
    </div>
  )
}

export default SectionGrid
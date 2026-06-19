
const CurriculumItem = ({ title, index }: { title: string, index: number }) => {
  return (
    <li className="border-gray-200 py-4 md:px-4 border-b last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
      <h1 className="text-5xl font-bold mb-2">
        {String(index + 1).padStart(2, "0")}
      </h1>
      <p className="text-gray-800 text-md font-medium">
        {title}
      </p>
    </li>
  )
}

export default CurriculumItem
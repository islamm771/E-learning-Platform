interface IProps {
  title: string,
  description: string
}


const SectionHeader = ({ title, description }: IProps) => {
  return (
    <>
      <h2 className="text-4xl font-semibold mb-5">{title}</h2>
      <p className="max-w-4xl text-gray-600">
        {description}
      </p>
    </>
  )
}

export default SectionHeader
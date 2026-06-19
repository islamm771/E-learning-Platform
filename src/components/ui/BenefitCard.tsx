import type { IBenefit } from '../../interface'

interface IProps {
  benefit: IBenefit
}


const BenefitCard = ({ benefit }: IProps) => {
  return (
    <div className="bg-white px-6 py-10 rounded-xl border border-white transition-all duration-300 hover:border hover:border-orange-400 hover:shadow-xl hover:shadow-gray-200">
      <h1 className="text-5xl text-right font-bold mb-8">{benefit.id.toString().padStart(2, '0')}</h1>
      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
      <p className="text-gray-600">
        {benefit.description}
      </p>
    </div>
  )
}

export default BenefitCard
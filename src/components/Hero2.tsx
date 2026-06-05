import type { ReactNode } from "react"

const Hero2 = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border-b border-gray-200 pb-8">
      {children}
    </div>
  )
}

export default Hero2
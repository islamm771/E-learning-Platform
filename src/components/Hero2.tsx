import type { ReactNode } from "react"

const Hero2 = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border-b border-gray-200 pb-20">
        {children}
      </div>
    </div>

  )

}

export default Hero2
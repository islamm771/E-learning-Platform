import { logos } from "../../data"

const LogoCloud = () => {
  return (
    <div className="logo-cloud">
      <div className="container mx-auto px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
        <div className="bg-white grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 gap-10 p-10 rounded-md">
          {logos.map((logo) => (
            <div key={logo.id}>
              <img
                className="block mx-auto"
                src={logo.link}
                alt={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoCloud
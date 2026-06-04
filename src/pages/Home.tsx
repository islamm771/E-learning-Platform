import Benefits from "../components/Benefits"
import FAQs from "../components/FAQs"
import Hero from "../components/Hero"
import OurCourses from "../components/OurCourses"
import OurPricing from "../components/OurPricing"
import OurTestimonials from "../components/OurTestimonials"

const HomePage = () => {
  return (
    <>
      <Hero />
      <div>
        <div className="container mx-auto px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
          <div className="bg-white grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 gap-10 p-10 rounded-md">
            <div>
              <img className="block mx-auto" src="/imgs/logos/zapier.png" alt="zapier" />
            </div>
            <div>
              <img className="block mx-auto" src="/imgs/logos/spotify.png" alt="spotify" />
            </div>
            <div>
              <img className="block mx-auto" src="/imgs/logos/zoom.png" alt="zoom" />
            </div>
            <div>
              <img className="block mx-auto" src="/imgs/logos/amazon.png" alt="" />
            </div>
            <div>
              <img className="block mx-auto" src="/imgs/logos/adobe.png" alt="adobe" />
            </div>
            <div>
              <img className="block mx-auto" src="/imgs/logos/notion.png" alt="notion" />
            </div>
            <div>
              <img className="block mx-auto" src="/imgs/logos/netflix.png" alt="netflix" />
            </div>
          </div>
        </div>
      </div>
      <Benefits />
      <OurCourses />
      <OurTestimonials />
      <OurPricing />
      <FAQs />
    </>
  )
}

export default HomePage
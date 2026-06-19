import Benefits from "../components/Home/Benefits"
import FAQs from "../components/Home/FAQs"
import Hero from "../components/Home/Hero"
import LogoCloud from "../components/Home/LogoCloud"
import OurCourses from "../components/Home/OurCourses"
import OurPricing from "../components/Home/OurPricing"
import OurTestimonials from "../components/Home/OurTestimonials"


const HomePage = () => {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Benefits />
      <OurCourses />
      <OurTestimonials />
      <OurPricing />
      <FAQs />
    </>
  )
}

export default HomePage
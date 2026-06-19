import SectionGrid from "../components/Aboutus/SectionGrid"
import SectionHeader from "../components/Aboutus/SectionHeader"
import Hero2 from "../components/Hero2"
import Button from "../components/ui/Button"
import { aboutData } from "../data"

const AboutUs = () => {
  return (
    <>
      <Hero2>
        <h2 className="text-4xl font-bold">
          About Skillbridge
        </h2>
        <p className="text-gray-600">
          Welcome to our platform, where we are passionate about empowering individuals
          to master the world of design and development. We offer a wide range of
          online courses designed to equip learners with the skills and knowledge
          needed to succeed in the ever-evolving digital landscape.
        </p>
      </Hero2>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20 space-y-32">

        <section>
          <SectionHeader
            title="Achievements"
            description="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
          />
          <SectionGrid aboutItems={aboutData.achievements} />
        </section>

        <section>
          <SectionHeader
            title="Our Goals"
            description="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
            Through our carefully crafted courses, we aim to"
          />
          <SectionGrid aboutItems={aboutData.goals} />
        </section>

        <section>
          <SectionHeader
            title="Our Benefits"
            description="At SkillBridge, we are committed to providing an exceptional learning experience that goes beyond traditional education. Our programs are designed to equip students with practical skills, expert guidance, and ongoing support, ensuring they have everything they need to achieve their personal and professional goals."
          />

          <SectionGrid aboutItems={aboutData.benefits} />
        </section>

        <div className="bg-white grid grid-cols-1 md:grid-cols-12 items-center gap-10 p-6 lg:p-10 rounded-md">
          <div className="md:col-span-9">
            <h2 className="text-3xl font-semibold mb-5">
              <span className="text-orange-400">Together</span>, let's shape the future of digital innovation
            </h2>
            <p className="text-gray-600">
              Join us on this exciting learning journey and unlock your potential in design and development.
            </p>
          </div>
          <div className="md:col-span-3">
            <Button href="#" className="block w-fit md:ml-auto">Join Now</Button>
          </div>

        </div>

      </div>
    </>
  )
}

export default AboutUs
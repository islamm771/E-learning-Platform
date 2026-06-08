import { FaChessQueen } from "react-icons/fa"
import Button from "../components/Button"
import Hero2 from "../components/Hero2"

// const courseData = {
//   id: 2,
//   title: "UI/UX Design",
//   description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
//   level: "Intermediate",
//   duration: "6 weeks",
//   image: "/imgs/course2.png",
//   instructor: "Jane Doe",
//   curriculum: [
//     {
//       title: "Introduction to UI/UX Design",
//       lessons: [
//         {
//           title: "Understanding UI/UX Design Principles",
//           duration: "45 minutes",
//         },
//         {
//           title: "Importance of User-Centered Design",
//           duration: "1 hour",
//         },
//         {
//           title: "The Role of UI/UX Design in Product Development",
//           duration: "45 minutes",
//         },
//       ]
//     },
//     {
//       title: "User Research and Analysis",
//       lessons: [
//         {
//           title: "Conducting User Research and Interviews",
//           duration: "1 hour",
//         },
//         {
//           title: "Analyzing User Needs and Behavior",
//           duration: "1 hour",
//         },
//         {
//           title: "Creating User Personas and Scenarios",
//           duration: "45 minutes",
//         },
//       ]
//     },
//     {
//       title: "Wireframing and Prototyping",
//       lessons: [
//         {
//           title: "Introduction to Wireframing Tools and Techniques",
//           duration: "1 hour",
//         },
//         {
//           title: "Creating Low-Fidelity Wireframes",
//           duration: "1 hour",
//         },
//         {
//           title: "Prototyping and Interactive Mockups",
//           duration: "1 hour",
//         },
//       ]
//     },
//     {
//       title: "Visual Design and Branding",
//       lessons: [
//         {
//           title: "Color Theory and Typography in UI Design",
//           duration: "1 hour",
//         },
//         {
//           title: "Visual Hierarchy and Layout Design",
//           duration: "1 hour",
//         },
//         {
//           title: "Creating a Strong Brand Identity",
//           duration: "45 minutes",
//         },
//       ]
//     },
//     {
//       title: "Usability Testing and Iteration",
//       lessons: [
//         {
//           title: "Usability Testing Methods and Techniques",
//           duration: "1 hour",
//         },
//         {
//           title: "Analyzing Usability Test Results",
//           duration: "45 minutes",
//         },
//         {
//           title: "Iterating and Improving UX Designs",
//           duration: "45 minutes",
//         },
//       ]
//     },
//   ]
// }




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
        <div>
          <h2 className="text-4xl font-semibold mb-5">Achievements</h2>
          <p className="max-w-4xl text-gray-600">
            Our commitment to excellence has led us to achieve
            significant milestones along our journey. Here are some of our notable achievements
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {Array.from([0, 0, 0, 0]).map((_, idx) => (
              <div className="bg-white px-6 py-10 rounded-xl space-y-5" key={idx}>
                <span className="bg-orange-100 rounded p-3 text-orange-500 border border-orange-200 block w-fit cursor-pointer">
                  <FaChessQueen size={20} />
                </span>
                <h3 className="text-xl font-semibold">Trusted by Thousands</h3>
                <p className="text-md text-gray-600">
                  We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-5">Our Goals</h2>
          <p className="max-w-4xl text-gray-600">
            At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
            Through our carefully crafted courses, we aim to
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {Array.from([0, 0, 0, 0]).map((_, idx) => (
              <div className="bg-white px-6 py-10 rounded-xl space-y-5" key={idx + 2}>
                <span className="bg-orange-100 rounded p-3 text-orange-500 border border-orange-200 block w-fit cursor-pointer">
                  <FaChessQueen size={20} />
                </span>
                <h3 className="text-xl font-semibold">Trusted by Thousands</h3>
                <p className="text-md text-gray-600">
                  We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.
                </p>
              </div>
            ))}
          </div>
        </div>
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
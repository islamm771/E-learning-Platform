import { useState } from "react";
import { CiClock2 } from "react-icons/ci";
import Hero2 from "../components/Hero2";

const courseData = {
  id: 2,
  title: "UI/UX Design",
  description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
  level: "Intermediate",
  duration: "6 weeks",
  image: "/imgs/course2.png",
  instructor: "Jane Doe",
  curriculum: [
    {
      title: "Introduction to UI/UX Design",
      lessons: [
        {
          title: "Understanding UI/UX Design Principles",
          duration: "45 minutes",
        },
        {
          title: "Importance of User-Centered Design",
          duration: "1 hour",
        },
        {
          title: "The Role of UI/UX Design in Product Development",
          duration: "45 minutes",
        },
      ]
    },
    {
      title: "User Research and Analysis",
      lessons: [
        {
          title: "Conducting User Research and Interviews",
          duration: "1 hour",
        },
        {
          title: "Analyzing User Needs and Behavior",
          duration: "1 hour",
        },
        {
          title: "Creating User Personas and Scenarios",
          duration: "45 minutes",
        },
      ]
    },
    {
      title: "Wireframing and Prototyping",
      lessons: [
        {
          title: "Introduction to Wireframing Tools and Techniques",
          duration: "1 hour",
        },
        {
          title: "Creating Low-Fidelity Wireframes",
          duration: "1 hour",
        },
        {
          title: "Prototyping and Interactive Mockups",
          duration: "1 hour",
        },
      ]
    },
    {
      title: "Visual Design and Branding",
      lessons: [
        {
          title: "Color Theory and Typography in UI Design",
          duration: "1 hour",
        },
        {
          title: "Visual Hierarchy and Layout Design",
          duration: "1 hour",
        },
        {
          title: "Creating a Strong Brand Identity",
          duration: "45 minutes",
        },
      ]
    },
    {
      title: "Usability Testing and Iteration",
      lessons: [
        {
          title: "Usability Testing Methods and Techniques",
          duration: "1 hour",
        },
        {
          title: "Analyzing Usability Test Results",
          duration: "45 minutes",
        },
        {
          title: "Iterating and Improving UX Designs",
          duration: "45 minutes",
        },
      ]
    },
  ]
}




const CoursePage = () => {
  const [activeLesson, setActiveLesson] = useState("");
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
        <Hero2>
          <h2 className="text-4xl font-bold">
            UI/UX Design Course
          </h2>
          <p className="text-gray-600">
            Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge
            and skills to create exceptional user interfaces (UI) and enhance user experiences (UX).
            Dive into the world of design thinking, wireframing, prototyping, and usability testing.
            Below is an overview of the curriculum
          </p>
        </Hero2>
      </div>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
        <div className="videoplayer">
          <video src="https://placeholdervideo.dev/1920x1080" className="rounded-md" controls poster="/imgs/course-img.png"></video>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {courseData.curriculum.map((curr, idxx) => (
            <div className="bg-white px-6 py-10 rounded-xl" key={idxx} >
              <h1 className="text-5xl text-right font-bold mb-8">{String(idxx + 1).padStart(2, "0")}</h1>
              <h3 className="text-2xl font-semibold mb-5">{curr.title}</h3>
              <ul className="space-y-6">
                {curr.lessons.map((lesson, idx) => (
                  <li className={`p-6 border  rounded-md flex items-center justify-between flex-wrap gap-5 cursor-pointer
                    ${activeLesson === lesson.title ? "border-orange-300 shadow-md shadow-orange-100" : "border-gray-200"}`}
                    key={idx + 99} onClick={() => setActiveLesson(lesson.title)}>
                    <div>
                      <h5 className="text-xl font-medium mb-2 max-w-sm">{lesson.title}</h5>
                      <p className="text-lg text-gray-600">
                        Lesson {String(idx + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <span className={`text-gray-600 text-sm font-medium px-3 py-2 rounded-md flex items-center gap-1 w-fit
                      ${activeLesson === lesson.title ? "bg-orange-100" : "bg-gray-100"}`}>
                      <CiClock2 />
                      {lesson.duration}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default CoursePage
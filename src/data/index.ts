import type { ICourse, ITestimonial } from "../interface"

export const benefitsData = [
  {
    id: 1,
    title: "Flexible Learning Schedule",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 2,
    title: "Expert Instructors",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 3,
    title: "Diverse Course Offerings",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 4,
    title: "Updated Curriculum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 5,
    title: "Practical Projects and Assignments",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 6,
    title: "Interactive Learning Environment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
]

export const testimonialsData: ITestimonial[] = [
  {
    id: 1,
    name: "John Doe",
    image: "/imgs/testimonial1.png",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore culpa recusandae, explicabo, natus beatae nemo odio quod minus numquam excepturi architecto commodi accusantium voluptas corrupti dolorum vitae asperiores fugit."
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/imgs/testimonial2.png",
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore culpa recusandae, explicabo, natus beatae nemo odio quod minus numquam excepturi architecto commodi accusantium voluptas corrupti dolorum vitae asperiores fugit."
  }
]

export const coursesData: ICourse[] = [
  {
    id: 1,
    title: "Web Design Fundamentals",
    description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    level: "Beginner",
    duration: "4 weeks",
    image: "/imgs/course1.png",
    instructor: "John Doe",
    curriculum: [
      {
        title: "Introduction to HTML",
        lessons: [],
      },
      {
        title: "Styling with CSS",
        lessons: [],
      },
      {
        title: "Introduction to Responsive Design",
        lessons: [],
      },
      {
        title: "Design Principles for Web",
        lessons: [],
      },
      {
        title: "Building a Basic Website",
        lessons: [],
      },
    ]
  },
  {
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
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    level: "Advanced",
    duration: "8 weeks",
    image: "/imgs/course3.png",
    instructor: "Alice Smith",
    curriculum: [
      {
        title: "Introduction to Mobile App Development",
        lessons: [],
      },
      {
        title: "Building iOS Apps with Swift",
        lessons: [],
      },
      {
        title: "Building Android Apps with Kotlin",
        lessons: [],
      },
      {
        title: "Cross-Platform Development with React Native",
        lessons: [],
      },
      {
        title: "Publishing and Marketing Your App",
        lessons: [],
      },
    ]
  },
]
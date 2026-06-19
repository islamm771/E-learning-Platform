import {
  FaAward,
  FaCrown,
  FaGraduationCap,
  FaHandshake,
  FaLightbulb,
  FaMedal,
  FaRocket,
  FaUsers,
} from "react-icons/fa6";
import type { IAboutItem, IBenefit, ICourse, ITestimonial } from "../interface";


export const logos = [
  {
    id: 1,
    name: "Zapier",
    link: "/imgs/logos/zapier.png",
  },
  {
    id: 2,
    name: "Spotify",
    link: "/imgs/logos/spotify.png",
  },
  {
    id: 3,
    name: "Zoom",
    link: "/imgs/logos/zoom.png",
  },
  {
    id: 4,
    name: "Amazon",
    link: "/imgs/logos/amazon.png",
  },
  {
    id: 5,
    name: "Adobe",
    link: "/imgs/logos/adobe.png",
  },
  {
    id: 6,
    name: "Notion",
    link: "/imgs/logos/notion.png",
  },
  {
    id: 7,
    name: "Netflix",
    link: "/imgs/logos/netflix.png",
  },
];


export const benefitsData: IBenefit[] = [
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
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    level: "Beginner",
    duration: "4 weeks",
    image: "/imgs/course1.png",
    instructor: "John Doe",
    curriculum: [
      {
        title: "Introduction to HTML",
        lessons: [
          {
            title: "HTML Document Structure",
            duration: "45 minutes",
          },
          {
            title: "Working with Text, Images, and Links",
            duration: "1 hour",
          },
          {
            title: "Creating Forms and Tables",
            duration: "45 minutes",
          },
        ],
      },
      {
        title: "Styling with CSS",
        lessons: [
          {
            title: "CSS Selectors and Properties",
            duration: "1 hour",
          },
          {
            title: "Flexbox and CSS Grid",
            duration: "1 hour",
          },
          {
            title: "Animations and Transitions",
            duration: "45 minutes",
          },
        ],
      },
      {
        title: "Responsive Web Design",
        lessons: [
          {
            title: "Mobile-First Design",
            duration: "45 minutes",
          },
          {
            title: "Media Queries",
            duration: "45 minutes",
          },
          {
            title: "Responsive Layout Techniques",
            duration: "1 hour",
          },
        ],
      },
      {
        title: "Design Principles",
        lessons: [
          {
            title: "Typography Basics",
            duration: "45 minutes",
          },
          {
            title: "Color Theory",
            duration: "45 minutes",
          },
          {
            title: "Spacing and Visual Hierarchy",
            duration: "1 hour",
          },
        ],
      },
      {
        title: "Final Website Project",
        lessons: [
          {
            title: "Project Planning",
            duration: "45 minutes",
          },
          {
            title: "Building the Website",
            duration: "1 hour",
          },
          {
            title: "Testing & Deployment",
            duration: "45 minutes",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
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
        ],
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
        ],
      },
      {
        title: "Wireframing and Prototyping",
        lessons: [
          {
            title: "Introduction to Wireframing Tools",
            duration: "1 hour",
          },
          {
            title: "Creating Low-Fidelity Wireframes",
            duration: "1 hour",
          },
          {
            title: "Interactive Prototypes",
            duration: "1 hour",
          },
        ],
      },
      {
        title: "Visual Design and Branding",
        lessons: [
          {
            title: "Color Theory and Typography",
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
        ],
      },
      {
        title: "Usability Testing and Iteration",
        lessons: [
          {
            title: "Usability Testing Methods",
            duration: "1 hour",
          },
          {
            title: "Analyzing Test Results",
            duration: "45 minutes",
          },
          {
            title: "Improving User Experience",
            duration: "45 minutes",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift, Kotlin, and React Native.",
    level: "Advanced",
    duration: "8 weeks",
    image: "/imgs/course3.png",
    instructor: "Alice Smith",
    curriculum: [
      {
        title: "Introduction to Mobile Development",
        lessons: [
          {
            title: "Mobile App Fundamentals",
            duration: "45 minutes",
          },
          {
            title: "Development Environment Setup",
            duration: "1 hour",
          },
          {
            title: "Understanding App Architecture",
            duration: "45 minutes",
          },
        ],
      },
      {
        title: "iOS Development with Swift",
        lessons: [
          {
            title: "Swift Language Basics",
            duration: "1 hour",
          },
          {
            title: "Building Interfaces with SwiftUI",
            duration: "1 hour",
          },
          {
            title: "Navigation and State Management",
            duration: "45 minutes",
          },
        ],
      },
      {
        title: "Android Development with Kotlin",
        lessons: [
          {
            title: "Kotlin Fundamentals",
            duration: "1 hour",
          },
          {
            title: "Android UI Components",
            duration: "1 hour",
          },
          {
            title: "Activities and Fragments",
            duration: "45 minutes",
          },
        ],
      },
      {
        title: "Cross-Platform with React Native",
        lessons: [
          {
            title: "React Native Basics",
            duration: "1 hour",
          },
          {
            title: "Navigation and Native Modules",
            duration: "1 hour",
          },
          {
            title: "Working with APIs",
            duration: "45 minutes",
          },
        ],
      },
      {
        title: "Publishing Your Application",
        lessons: [
          {
            title: "Preparing Production Builds",
            duration: "45 minutes",
          },
          {
            title: "Publishing to App Store & Google Play",
            duration: "1 hour",
          },
          {
            title: "Maintenance and Updates",
            duration: "45 minutes",
          },
        ],
      },
    ],
  },
];

export const aboutData: { goals: IAboutItem[], achievements: IAboutItem[], benefits: IAboutItem[] } = {
  goals: [
    {
      id: 1,
      itemIcon: FaCrown,
      title: "Trusted by Thousands",
      description:
        "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
    },
    {
      id: 2,
      itemIcon: FaMedal,
      title: "Commitment to Excellence",
      description:
        "We are dedicated to delivering high-quality education through expert instructors and practical learning experiences.",
    },
    {
      id: 3,
      itemIcon: FaGraduationCap,
      title: "Empowering Learners",
      description:
        "We help learners gain the skills and confidence needed to succeed in their careers.",
    },
    {
      id: 4,
      itemIcon: FaLightbulb,
      title: "Innovation in Education",
      description:
        "We embrace modern teaching methods and technologies to create engaging learning experiences.",
    },
  ],

  achievements: [
    {
      id: 1,
      itemIcon: FaAward,
      title: "10,000+ Graduates",
      description:
        "Thousands of students have successfully completed our programs and advanced their careers.",
    },
    {
      id: 2,
      itemIcon: FaUsers,
      title: "Global Community",
      description:
        "Our learners come from around the world, creating a diverse learning environment.",
    },
    {
      id: 3,
      itemIcon: FaRocket,
      title: "Career Success",
      description:
        "Many graduates have secured positions at leading technology and design companies.",
    },
    {
      id: 4,
      itemIcon: FaHandshake,
      title: "Industry Partnerships",
      description:
        "We collaborate with industry experts to keep our curriculum relevant and practical.",
    },
  ],

  benefits: [
    {
      id: 1,
      itemIcon: FaGraduationCap,
      title: "Expert Instructors",
      description:
        "Learn from experienced professionals with years of real-world expertise.",
    },
    {
      id: 2,
      itemIcon: FaLightbulb,
      title: "Hands-on Learning",
      description:
        "Practice with real-world projects and interactive assignments.",
    },
    {
      id: 3,
      itemIcon: FaUsers,
      title: "Supportive Community",
      description:
        "Connect with fellow learners and mentors throughout your journey.",
    },
    {
      id: 4,
      itemIcon: FaRocket,
      title: "Career Growth",
      description:
        "Build job-ready skills that help you stand out in the competitive job market.",
    },
  ],
};

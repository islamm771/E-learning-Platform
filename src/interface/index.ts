import type { IconType } from "react-icons"

export interface ITestimonial {
  id: number,
  name: string,
  feedback: string,
  image: string,
}


export interface ICourse {
  id: number,
  title: string,
  description: string,
  level: string,
  duration: string,
  image: string,
  instructor: string,
  curriculum: ICurriculum[]
}

export interface ICurriculum { title: string, lessons: ILesson[] }

export interface ILesson { title: string, duration: string }

export interface IBenefit {
  id: number,
  title: string,
  description: string
}

export interface IAboutItem {
  id: number,
  itemIcon: IconType,
  title: string,
  description: string
}
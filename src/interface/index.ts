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
  curriculum: { title: string, lessons: { title: string, duration: string }[] }[]
}
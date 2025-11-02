export type Experience = {
  id: number,
  title: string,
  company: string,
  dateRange: string,
  bulletPoints: string[],
  image: string,
  alt: string,
}

export type Project = {
  id: number,
  title: string,
  tagline: string,
  techStack: string[],
  image: string,
  github: string,
  description: string,
}

export type Credit = {
  id: number,
  location: string,
  name: string,
}
export interface BasicInfo {
  name: string
  title: string
  phone: string
  email: string
  linkedin?: string
  github?: string
}

export interface Skill {
  name: string
  icon: string
}

export interface ExperienceItem {
  company: string
  position: string
  startDate: string
  endDate: string
  bulletPoints: string[]
}

export interface Project {
  title: string
  description?: string
  tech?: string[]
  previewLink?: string
  image?: string
  githubLink?: string
}

export interface Profile {
  basicInfo: BasicInfo
  skills: Skill[]
  workExperience: ExperienceItem[]
  projects: Project[]
}

export interface BasicInfo {
  name: string
  title: string
  phone: string
  email: string
  linkedin?: string
  github?: string
}

export interface SkillCategory {
  category: string
  skills: string[]
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
  link?: string
  image?: string
}

export interface Profile {
  basicInfo: BasicInfo
  skills: SkillCategory[]
  workExperience: ExperienceItem[]
  projects: Project[]
}

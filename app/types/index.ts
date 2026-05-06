export interface Project {
  id: number
  slug: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  link: string
  featured: boolean
  // Optional fields for the detail page — add when ready
  github?: string
  year?: number
  longDescription?: string
}

export interface TechItem {
  name: string
  abbr: string
  color: string
  bgColor: string
  borderColor: string
}

export interface Stat {
  value: string
  label: string
  suffix: string
}

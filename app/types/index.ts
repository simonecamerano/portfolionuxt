export interface CaseStudySection {
  headline: string
  text: string
  points: string[]
}

export interface CaseStudy {
  problem: CaseStudySection
  solution: CaseStudySection
  archFlow: string[]
  demonstrates: string[]
  replicability: {
    text: string
    useCases: string[]
  }
  responsibleNote?: {
    headline: string
    text: string
    points: string[]
  }
  ctaText: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  // Optional: omit when there is nothing public to link (e.g. private repo)
  link?: string
  featured: boolean
  // Optional vertical demo video (9:16), shown instead of the screenshot on the detail page
  video?: string
  videoPoster?: string
  // Optional fields for the detail page, add when ready
  github?: string
  year?: number
  longDescription?: string
  caseStudy?: CaseStudy
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

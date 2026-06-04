export interface CaseStudySection {
  headline: string
  text: string
  points: string[]
}

export interface CaseStudy {
  problem: CaseStudySection
  solution: CaseStudySection
  archFlow: string[]         // ordered steps like ["Scanner", "→ Parser", "→ Generator", ...]
  demonstrates: string[]     // bullet list of what the project demonstrates professionally
  replicability: {
    text: string
    useCases: string[]
  }
  ctaText: string            // the final CTA message
}

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

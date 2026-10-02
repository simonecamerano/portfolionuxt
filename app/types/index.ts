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
  // Optional: badge in plain language for business owners, shown on the home
  // cards instead of the technical category
  ownerLabel?: string
  description: string
  image: string
  tags: string[]
  // Optional: omit when there is nothing public to link (e.g. private repo)
  link?: string
  featured: boolean
  // Optional demo video. Vertical (9:16, default) replaces the screenshot in
  // the hero; horizontal (16:9) keeps the screenshot there and gets its own
  // full-width section below, where its subtitles stay readable
  video?: string
  videoPoster?: string
  videoAspect?: '9/16' | '16/9'
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

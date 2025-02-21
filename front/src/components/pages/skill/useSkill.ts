import { useState } from 'react'

type Skill = {
  name: string
  icon: string
  level: number
}

type SkillGroups = {
  [key: string]: Skill[]
}

type Category = {
  title: string
  groups: SkillGroups
}

export const useSkill = () => {
  const [selectedCategory, setSelectedCategory] = useState(0)

  const categories: Category[] = [
    {
      title: 'Engineering',
      groups: {
        Frontend: [
          { name: 'HTML5/CSS3', icon: '/sample-icon.svg', level: 4 },
          { name: 'JavaScript', icon: '/sample-icon.svg', level: 4 },
          { name: 'TypeScript', icon: '/sample-icon.svg', level: 4 },
          { name: 'React', icon: '/sample-icon.svg', level: 4 },
          { name: 'NextJS', icon: '/sample-icon.svg', level: 4 },
        ],
        Backend: [
          { name: 'NodeJS', icon: '/sample-icon.svg', level: 4 },
          { name: 'Python', icon: '/sample-icon.svg', level: 4 },
          { name: 'Google Apps Script', icon: '/sample-icon.svg', level: 4 },
        ],
        Infra: [
          { name: 'AWS', icon: '/sample-icon.svg', level: 4 },
          { name: 'Docker', icon: '/sample-icon.svg', level: 4 },
          { name: 'Terraform', icon: '/sample-icon.svg', level: 4 },
        ],
        Design: [{ name: 'Figma', icon: '/sample-icon.svg', level: 4 }],
        DevTool: [
          { name: 'Ubuntu', icon: '/sample-icon.svg', level: 4 },
          { name: 'CircleCI', icon: '/sample-icon.svg', level: 4 },
        ],
      },
    },
    {
      title: 'Certification',
      groups: {
        // Certification groups would be defined here
      },
    },
    {
      title: 'Achievement',
      groups: {
        // Achievement groups would be defined here
      },
    },
  ]

  const renderStars = (level: number) => {
    return '★'.repeat(level) + '☆'.repeat(5 - level)
  }

  return {
    categories,
    renderStars,
    selectedCategory,
    setSelectedCategory,
  }
}

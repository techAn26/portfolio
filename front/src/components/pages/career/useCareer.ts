import { useState } from 'react'

export type CareerCategory = '職歴' | '学歴' | '資格・認定'

export type CareerItem = {
  year: number
  category: CareerCategory
  title: string
  subtitle?: string
  details?: string[]
}

const careerData: CareerItem[] = [
  {
    year: 2025,
    category: '資格・認定',
    title: 'AWS認定資格',
    subtitle: 'Cloud Practitioner',
  },
  {
    year: 2024,
    category: '職歴',
    title: 'ITコンサルティング会社',
    subtitle: '開発・研究部門',
    details: ['クラウドインフラの設計・構築', 'Webアプリケーション開発', '新規事業の企画・立案'],
  },
  {
    year: 2023,
    category: '学歴',
    title: '名古屋大学大学院',
    subtitle: '工学研究科 修了',
  },
  {
    year: 2021,
    category: '学歴',
    title: '名古屋大学',
    subtitle: '工学部 卒業',
  },
  {
    year: 2018,
    category: '学歴',
    title: '名古屋大学',
    subtitle: '工学部 卒業',
  },
  {
    year: 2017,
    category: '学歴',
    title: '名古屋大学',
    subtitle: '工学部 卒業',
  },
  {
    year: 2016,
    category: '学歴',
    title: '名古屋大学',
    subtitle: '工学部 卒業',
  },
  {
    year: 2015,
    category: '学歴',
    title: '名古屋大学',
    subtitle: '工学部 卒業',
  },
  {
    year: 2010,
    category: '学歴',
    title: '名古屋大学',
    subtitle: '工学部 卒業',
  },
]

export const useCareer = () => {
  const [selectedCategory, setSelectedCategory] = useState<CareerCategory | 'all'>('all')

  const categories: CareerCategory[] = ['職歴', '学歴', '資格・認定']

  const filteredData =
    selectedCategory === 'all' ? careerData : careerData.filter((item) => item.category === selectedCategory)

  const years = Array.from(new Set(careerData.map((item) => item.year))).sort((a, b) => b - a)

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredData,
    years,
  }
}

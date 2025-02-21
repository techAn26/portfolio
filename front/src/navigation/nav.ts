import { Assets } from '@/consts/Assets'

type Nav = {
  [key: string]: {
    title: string
    description: string
    path: string
    bg?: string
    layer: number
    hideContents?: boolean
  }
}

export const nav: Nav = {
  '/': {
    title: '',
    description: '',
    path: '/',
    bg: Assets.img.top.bg,
    layer: 0,
  },
  '/about/': {
    title: 'About',
    description: '',
    path: '/about/',
    bg: Assets.img.about.bg,
    layer: 1,
  },
  '/work/': {
    title: 'Work',
    description: 'work',
    path: '/work/',
    layer: 1,
  },
  '/career/': {
    title: 'Career',
    description: 'career',
    path: '/career/',
    layer: 1,
  },
  '/skill/': {
    title: 'Skill',
    description: 'skill',
    path: '/skill/',
    layer: 1,
    hideContents: false,
  },
  '/contact/': {
    title: 'Contact',
    description: '仕事に関するお問い合わせはこちらからお願いいたします',
    path: '/contact/',
    layer: 1,
  },
}

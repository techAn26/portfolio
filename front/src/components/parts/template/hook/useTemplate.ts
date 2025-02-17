import { usePathname } from 'next/navigation'

export const useTemplate = () => {
  const path = usePathname()

  const isActive = (navPath: string) => {
    return path === navPath
  }

  return { path, isActive }
}

import { useLocation } from 'react-router-dom'

export const usePathSegment = () => {
  const location = useLocation()
  const path = location.pathname
  const segments = path.split('/')
  return segments[segments.length - 1]
}

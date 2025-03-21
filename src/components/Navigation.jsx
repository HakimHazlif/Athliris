import { Link } from 'react-router-dom'

export const Navigation = ({ children, link }) => {
  return (
    <Link
      to={link}
      className="flex items-center space-x-1 hover:text-indigo-200 transition"
    >
      {children}
    </Link>
  )
}

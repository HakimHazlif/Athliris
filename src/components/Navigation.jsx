import { Link } from 'react-router-dom'

export const Navigation = ({ children, link, onClose = null }) => {
  return (
    <Link
      to={link}
      onClick={onClose}
      className="flex flex-row-reverse items-center  justify-between w-full space-x-1 hover:text-neon-700 transition duration-150  gap-3"
    >
      {children}
    </Link>
  )
}

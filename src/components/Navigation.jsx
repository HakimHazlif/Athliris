import { Link } from 'react-router-dom'

export const Navigation = ({ children, link, forDesktop, onClose = null }) => {
  return (
    <Link
      to={link}
      onClick={onClose}
      className={`flex items-center w-full space-x-1 hover:text-neon-400 transition duration-150 ${forDesktop ? '' : 'gap-3'}`}
    >
      {children}
    </Link>
  )
}

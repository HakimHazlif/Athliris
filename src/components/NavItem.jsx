import { Link } from 'react-router-dom'

const NavItem = ({ to, icon, text }) => {
  return (
    <li>
      <Link
        to={to}
        className={`flex w-full items-center justify-between rounded-lg group hover:text-neon-600 transition-colors duration-200 relative overflow-hidden`}
      >
        <div className="flex items-center py-2 w-full">
          <div className="mr-2">{icon}</div>
          <span>{text}</span>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-[70%] w-2 rounded-md bg-neon-600 absolute -right-1"></div>
      </Link>
    </li>
  )
}

export default NavItem

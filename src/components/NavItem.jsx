import { Link } from 'react-router-dom'

const NavItem = ({ to, icon, text }) => {
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center py-2 rounded-lg hover:text-neon-600 transition-colors`}
      >
        <div className="mr-2">{icon}</div>
        <span>{text}</span>
      </Link>
    </li>
  )
}

export default NavItem

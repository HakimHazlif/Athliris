import { IoHomeOutline, IoHomeSharp, IoSettingsSharp } from 'react-icons/io5'
import NavItem from './NavItem'
import Logo from './ui/Logo'
import { useSelector } from 'react-redux'
import { user } from '../app/slices/authSlice'
import { RiBarChartFill } from 'react-icons/ri'
import { FaAppleAlt, FaCalendarAlt } from 'react-icons/fa'
import { TbBarbellFilled } from 'react-icons/tb'

const Sidebar = () => {
  const { username } = useSelector(user)

  const modifiedUsername = username.replace(' ', '-')

  return (
    <aside className="w-48 bg-white dark:bg-grayish-500 h-screen transition-all duration-300 flex flex-col shadow-xl">
      <div className="pl-10 flex-1">
        <div className="w-1/2 pt-7 pb-10">
          <Logo />
        </div>

        <nav className="">
          <ul className="">
            <NavItem to="/" icon={<IoHomeSharp size={18} />} text="Home" />
            <NavItem
              to={`/user/${modifiedUsername}/workouts`}
              icon={<TbBarbellFilled size={18} />}
              text="Workouts"
            />
            <NavItem
              to={`/user/${modifiedUsername}/nutrition`}
              icon={<FaAppleAlt size={18} />}
              text="Nutrition"
            />
            <NavItem
              to={`/user/${modifiedUsername}/progress`}
              icon={<FaCalendarAlt size={18} />}
              text="Program"
            />
            <NavItem
              to={`/user/${modifiedUsername}/settings`}
              icon={<IoSettingsSharp size={18} />}
              text="Settings"
            />
          </ul>
        </nav>
      </div>

      <div className={`p-4 border-t border-gray-400 dark:border-gray-600`}>
        <div className={`text-sm text-gray-500 dark:text-gray-400`}>
          Fitness Tracker v1.0
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

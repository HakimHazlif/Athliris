import { IoHomeSharp, IoSettingsSharp } from 'react-icons/io5'
import { Navigation } from './Navigation'
import { RiBarChartFill } from 'react-icons/ri'
import { TbBarbellFilled } from 'react-icons/tb'
import { FaAppleAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { user } from '../app/slices/authSlice'

const Navbar = ({ forDesktop = true, onClose = null }) => {
  const { username } = useSelector(user)
  const modifiedUsername = username.replace(' ', '-')

  const navigations = [
    {
      link: '/',
      children: (
        <>
          <IoHomeSharp size={18} />
          <span>Home</span>
        </>
      ),
    },
    {
      link: `/user/${modifiedUsername}/workouts`,
      children: (
        <>
          <TbBarbellFilled size={18} />
          <span>Workouts</span>
        </>
      ),
    },
    {
      link: `/user/${modifiedUsername}/nutrition`,
      children: (
        <>
          <FaAppleAlt size={18} />
          <span>Nutrition</span>
        </>
      ),
    },
    {
      link: `/user/${modifiedUsername}/progress`,
      children: (
        <>
          <RiBarChartFill size={18} />
          <span>Progress</span>
        </>
      ),
    },
    {
      link: `/user/${modifiedUsername}/settings`,
      children: (
        <>
          <IoSettingsSharp size={18} />
          <span>Settings</span>
        </>
      ),
    },
  ]

  const navigationsMap = forDesktop ? navigations.slice(0, 3) : navigations

  return (
    <nav
      className={
        forDesktop
          ? 'hidden md:flex items-center space-x-8'
          : 'flex flex-col items-start gap-2'
      }
    >
      {navigationsMap.map((el, index) => (
        <Navigation
          key={index}
          link={el.link}
          forDesktop={forDesktop}
          onClose={onClose}
        >
          {el.children}
        </Navigation>
      ))}
    </nav>
  )
}

export default Navbar

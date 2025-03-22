import {
  IoHomeOutline,
  IoHomeSharp,
  IoSettingsOutline,
  IoSettingsSharp,
} from 'react-icons/io5'
import { Navigation } from './Navigation'
import { LuActivity, LuApple } from 'react-icons/lu'
import { RiBarChartFill } from 'react-icons/ri'
import { PiBarbell } from 'react-icons/pi'
import { TbBarbellFilled } from 'react-icons/tb'
import { FaAppleAlt } from 'react-icons/fa'

const navigations = [
  {
    link: '#',
    children: (
      <>
        <IoHomeSharp size={18} />
        <span>Home</span>
      </>
    ),
  },
  {
    link: '#',
    children: (
      <>
        <TbBarbellFilled size={18} />
        <span>Workouts</span>
      </>
    ),
  },
  {
    link: '#',
    children: (
      <>
        <FaAppleAlt size={18} />
        <span>Nutrition</span>
      </>
    ),
  },
  {
    link: '#',
    children: (
      <>
        <RiBarChartFill size={18} />
        <span>Progress</span>
      </>
    ),
  },
  {
    link: '#',
    children: (
      <>
        <IoSettingsSharp size={18} />
        <span>Settings</span>
      </>
    ),
  },
]

const Navbar = ({ forDesktop = true }) => {
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
        <Navigation key={index} link={el.link}>
          {el.children}
        </Navigation>
      ))}
    </nav>
  )
}

export default Navbar

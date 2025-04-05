import { Link as ScrollLink } from 'react-scroll'
import { Navigation } from './Navigation'

const Navbar = () => {
  const navigations = [
    {
      link: '/',
      text: 'Home',
    },
    {
      link: 'features',
      text: 'Features',
    },
    {
      link: 'how-it-works',
      text: 'Guide',
    },
  ]

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigations.map((el, index) => (
        <ScrollLink
          key={index}
          to={el.link}
          className="flex items-center w-full space-x-1 hover:text-neon-600 transition duration-150 cursor-pointer"
        >
          {el.text}
        </ScrollLink>
      ))}
    </nav>
  )
}

export default Navbar

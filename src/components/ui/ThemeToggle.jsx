import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = ({ size = 20 }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-full transition-all duration-200 dark:bg-gray-700 bg-gray-200 "
    >
      {theme === 'dark' ? (
        <HiOutlineSun size={size} className="text-amber-400" />
      ) : (
        <HiOutlineMoon size={size} className="text-gray-600" />
      )}
    </button>
  )
}

export default ThemeToggle

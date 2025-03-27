import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-sm transition-all duration-200 dark:bg-gray-700 bg-gray-200"
    >
      {theme === 'dark' ? (
        <HiOutlineSun size={20} className="text-amber-400" />
      ) : (
        <HiOutlineMoon size={20} className="text-gray-600" />
      )}
    </button>
  )
}

export default ThemeToggle

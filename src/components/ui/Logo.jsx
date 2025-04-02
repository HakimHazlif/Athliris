import { logoDark, logoLight } from '../../assets'
import { useTheme } from '../../context/ThemeContext'

const Logo = () => {
  const { theme } = useTheme()

  return (
    <img
      src={theme === 'dark' ? logoDark : logoLight}
      alt="Athliris' logo"
      className="w-full min-w-24"
    />
  )
}

export default Logo

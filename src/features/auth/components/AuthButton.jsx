import { useNavigate } from 'react-router-dom'

const AuthButton = ({ text, className }) => {
  const navigate = useNavigate()

  function handleNavigation() {
    if (text === 'Log In') navigate('login')
    else navigate('signup')
  }

  return (
    <button
      onClick={handleNavigation}
      className={`${className} px-4 py-2 rounded-md transition duration-200`}
    >
      {text}
    </button>
  )
}

export default AuthButton

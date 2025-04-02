import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/ui/Spinner'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const { isLoggedIn, status } = useSelector((state) => state.userAuth)

  useEffect(() => {
    if (!isLoggedIn && status !== 'looading') navigate('/login')
  }, [isLoggedIn, status, navigate])

  if (status === 'loading')
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spinner />
      </div>
    )

  return children
}

export default ProtectedRoute

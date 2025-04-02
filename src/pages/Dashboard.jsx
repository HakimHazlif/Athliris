import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import UserPanel from '../components/UserPanel'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { user } from '../app/slices/authSlice'
import { getFitnessProfile } from '../features/fitnessProfile/api/apiFitnessProfile'
import Spinner from '../components/ui/Spinner'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.userAuth)
  const { status } = useSelector((state) => state.userData)
  const { uid } = useSelector(user)

  useEffect(() => {
    if (isLoggedIn) dispatch(getFitnessProfile(uid))
  }, [isLoggedIn, dispatch, uid])

  if (status === 'loading') return <Spinner />

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 bg-grayish-200 dark:bg-grayish-700">
        <header></header>
        <main className="">
          <Outlet />
        </main>
      </div>

      <UserPanel />
    </div>
  )
}

export default Dashboard

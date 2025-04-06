import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import UserPanel from '../components/UserPanel'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { user } from '../app/slices/authSlice'
import { getFitnessProfile } from '../features/fitnessProfile/api/apiFitnessProfile'

const DashboardLayout = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.userAuth)
  const { uid } = useSelector(user)

  useEffect(() => {
    if (isLoggedIn) dispatch(getFitnessProfile(uid))
  }, [isLoggedIn, dispatch, uid])

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col ">
        <header className="p-4 shadow-4xl dark:bg-grayish-600">
          <h1 className="text-4xl font-semibold text-grayish-500 dark:text-grayish-300 capitalize ">
            Dashboard
          </h1>
        </header>

        <main className="flex-1 p-6 custom-scrollbar bg-gray-200 dark:bg-grayish-700">
          <Outlet />
        </main>
      </div>

      <UserPanel />
    </div>
  )
}

export default DashboardLayout

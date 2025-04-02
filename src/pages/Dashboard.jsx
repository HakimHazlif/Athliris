import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import UserPanel from '../components/UserPanel'

const Dashboard = () => {
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

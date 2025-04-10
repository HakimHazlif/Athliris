import { Outlet } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-grayish-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8 main-bg">
      <Outlet />
    </div>
  )
}

export default ResetPassword

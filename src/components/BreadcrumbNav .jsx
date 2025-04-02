import { Link } from 'react-router-dom'

const BreadcrumbNav = ({ username }) => {
  const location = window.location.pathname
  const paths = location.split('/').filter((path) => path)

  return (
    <div className="flex items-center text-sm">
      <Link to="/" className="text-gray-500 hover:text-gray-700">
        الرئيسية
      </Link>
      {paths.map((path, index) => (
        <div key={index} className="flex items-center">
          {/* <ChevronRight size={16} className="mx-2 text-gray-400" /> */}
          <span
            className={
              index === paths.length - 1
                ? 'font-medium'
                : 'text-gray-500 hover:text-gray-700'
            }
          >
            {path === 'user'
              ? 'المستخدم'
              : path === username
                ? username
                : path === 'profile'
                  ? 'الملف الشخصي'
                  : path === 'notifications'
                    ? 'الإشعارات'
                    : path === 'settings'
                      ? 'الإعدادات'
                      : path === 'help'
                        ? 'المساعدة'
                        : path}
          </span>
        </div>
      ))}
    </div>
  )
}

export default BreadcrumbNav

import { useEffect, useRef } from 'react'
import UserAvatar from '../../../components/ui/UserAvatar'
import { useDispatch, useSelector } from 'react-redux'

import { user } from '../../../app/slices/authSlice'
import Navbar from '../../../components/MenuNavbar'
import { Link } from 'react-router-dom'
import { logOut } from '../service/apiAuth'
import AuthButtons from './AuthButtons'
import MenuNavbar from '../../../components/MenuNavbar'

const ProfileMenu = ({ onClose, profileRef }) => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.userAuth)
  const { username, email } = useSelector(user)
  const menuRef = useRef()

  useEffect(() => {
    function handleDropMenu(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      )
        onClose()
    }

    document.addEventListener('mousedown', handleDropMenu)

    return () => document.removeEventListener('mousedown', handleDropMenu)
  }, [menuRef, onClose, profileRef])

  return (
    <div
      className="bg-gray-100 dark:bg-grayish-500 shadow-lg absolute right-0 sm:top-8 top-7 z-50 w-[270px] max-w-[320px] min-w-[230px] rounded-lg py-4 px-4 "
      ref={menuRef}
    >
      {isLoggedIn && (
        <Link
          to={``}
          className="flex items-center p-3 pl-0 dark:hover:bg-grayish-700 hover:bg-gray-300 rounded-lg transition -mx-3"
          onClick={onClose}
        >
          <div className="relative px-3">
            <UserAvatar size="w-11 h-11" textSize="text-xl" />

            <div className="absolute z-30 w-3 h-3 bg-green-500 border-2 border-white rounded-full bottom-1 right-2"></div>
          </div>
          <div>
            <p className="font-semibold text-lg">{username}</p>
            <p className="text-slate-500 dark:text-slate-300 text-sm">
              {email}
            </p>
          </div>
        </Link>
      )}

      <MenuNavbar onClose={onClose} />
      <div className="mt-4">
        {isLoggedIn ? (
          <button
            onClick={() => {
              dispatch(logOut())
              onClose()
            }}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg transition"
          >
            Log out
          </button>
        ) : (
          <div className="w-full">
            <AuthButtons forDesktop={true} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileMenu

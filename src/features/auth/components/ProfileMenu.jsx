import { useEffect, useRef } from 'react'
import UserAvatar from '../../../components/UserAvatar'
import { useDispatch, useSelector } from 'react-redux'

import { userData } from '../../../app/slices/authSlice'
import Navbar from '../../../components/Navbar'
import { Link } from 'react-router-dom'
import { logOut } from '../../../api/apiAuth'

const ProfileMenu = ({ onClose, profileRef }) => {
  const dispatch = useDispatch()
  const { username, email } = useSelector(userData)
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
      className="bg-white absolute right-0 sm:top-8 top-7 z-50 text-black w-[270px] max-w-[320px] min-w-[230px] rounded-lg py-3 px-3"
      ref={menuRef}
    >
      <Link
        to={``}
        className="flex gap-4 justify-start items-center px-3 pt-3 pb-4 "
        onClick={onClose}
      >
        <div className="relative">
          <UserAvatar size="w-11 h-11" textSize="text-xl" />

          <div className="absolute z-30 w-[10px] h-[10px] bg-green-500 rounded-full bottom-[0px] right-0"></div>
        </div>
        <div>
          <p className="font-bold text-xl">{username}</p>
          <p className="text-slate-500 font-medium text-sm">{email}</p>
        </div>
      </Link>
      <Navbar forDesktop={false} />
      <div>
        <button
          className="bg-neon-500 text-white px-4 py-2 rounded-md transition duration-200"
          onClick={() => dispatch(logOut())}
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default ProfileMenu

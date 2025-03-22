import { useSelector } from 'react-redux'
import { userData } from '../../../app/slices/authSlice'
import { useRef, useState } from 'react'
import ProfileMenu from './ProfileMenu'

const UserProfile = () => {
  const [isDropDown, setIsDropDown] = useState(false)
  const profileRef = useRef()

  const { avatar, username } = useSelector(userData)

  function handleMenuToggle(e) {
    e.stopPropagation()

    setIsDropDown((prev) => !prev)
  }

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 group"
        ref={profileRef}
        onClick={handleMenuToggle}
      >
        <div className="sm:w-[27px] sm:h-[27px] w-[25px] h-[25px] rounded-full overflow-hidden ring-2">
          {avatar ? (
            <img
              src={avatar}
              alt={username}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex justify-center items-center bg-orange-coral hover:bg-orange-amber duration-150 transition-all text-sm md:text-lg sm:text-base text-slate-200 capitalize bg-orange-500">
              {username.charAt(0)}
            </div>
          )}
        </div>
        <span className="text-lg font-medium max-sm:hidden group-hover:text-orange-coral duration-150 transition-colors">
          {username}
        </span>
      </button>

      {isDropDown && (
        <ProfileMenu
          onClose={() => setIsDropDown(false)}
          profileRef={profileRef}
        />
      )}
    </div>
  )
}

export default UserProfile

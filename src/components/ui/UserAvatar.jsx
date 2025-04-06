import { useSelector } from 'react-redux'
import { user } from '../../app/slices/authSlice'

const UserAvatar = ({ size, textSize = 'text-lg' }) => {
  // size = 'w-10 h-10'
  const { username, avatar } = useSelector(user)

  return (
    <div
      className={`${size} aspect-square rounded-full overflow-hidden ring-2 ring-orange-coral`}
    >
      {avatar ? (
        <img
          src={avatar}
          alt={username}
          className="w-full h-full object-cover object-center"
        />
      ) : (
        <div
          className={`w-full h-full flex justify-center items-center bg-orange-500 ${textSize} text-slate-200 capitalize `}
        >
          {username.charAt(0) || 'A'}
        </div>
      )}
    </div>
  )
}

export default UserAvatar

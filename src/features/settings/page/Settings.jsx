import { useDispatch, useSelector } from 'react-redux'
import { user } from '../../../app/slices/authSlice'
import { useState } from 'react'
import SpinnerMini from '../../../components/ui/SpinnerMini'
import { changeUsernameAndAvatar } from '../api/apiSettings'
import UserAvatar from '../../../components/ui/UserAvatar'

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUDE_NAME

const Settings = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.userAuth)
  const { username } = useSelector(user)
  const [userName, setUserName] = useState(username)
  const [avatarChange, setAvatarChange] = useState({
    name: '',
    avatar: null,
  })
  const [isUserNameError, setIsUserNameError] = useState(false)
  const [isAvatarError, setIsAvatarError] = useState(false)

  const handleNameChange = (e) => {
    setUserName(e.target.value)
    setIsUserNameError(false)
  }

  const handleImageChange = async (e) => {
    setIsAvatarError(false)

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]

      if (!file) setIsAvatarError(true)

      const data = new FormData()
      data.append('file', file)
      data.append('upload_preset', 'Athliris')
      data.append('cloud_name', cloudName)

      setAvatarChange({ name: file.name, avatar: data })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (userName.trim() === '') {
      setIsUserNameError(true)
      return
    }

    dispatch(
      changeUsernameAndAvatar({
        username: userName,
        avatar: avatarChange.avatar,
      })
    )
  }

  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="dark:bg-grayish-600 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 ">
          Account Settings
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <UserAvatar size="w-28 h-28" textSize="text-6xl" />
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-0 right-0 bg-neon-500 p-2 rounded-full cursor-pointer shadow-md hover:bg-neon-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </label>
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                disabled={status === 'loading'}
              />
            </div>
            {avatarChange?.name ? (
              <p className="text-sm text-gray-300">{avatarChange.name}</p>
            ) : (
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Click to change image
              </span>
            )}
            {isAvatarError && (
              <div className="dark:text-red-600 text-red-700">
                Invalid image file
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Full name
            </label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={handleNameChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:border-neon-500 bg-white dark:bg-grayish-700"
              placeholder="Enter your full name"
              disabled={status === 'loading'}
            />
            {isUserNameError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                Invalid full name
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-neon-600 text-white py-3 rounded-md hover:bg-neon-700 transition"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? <SpinnerMini /> : 'Save the changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Settings

import { useEffect, useRef, useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'

import AuthButtons from '../features/auth/components/AuthButtons'
import Logo from './ui/Logo'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import UserProfile from '../features/auth/components/UserProfile'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../api/firebase'
import { setUser, setUserFailure } from '../app/slices/authSlice'
import ProfileMenu from '../features/auth/components/ProfileMenu'
import ThemeToggle from './ui/ThemeToggle'

const Header = () => {
  const dispatch = useDispatch()
  const { isLoggedIn, error, status, user } = useSelector(
    (state) => state.userAuth
  )

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  console.log(error, status, user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            username: user.displayName,
            email: user.email,
            avatar: user.photoURL || '',
            createdAt: user.metadata.creationTime,
            lastSignin: user.metadata.lastSignInTime,
          })
        )
      } else {
        dispatch(setUserFailure())
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  // shadow-md bg-gradient-to-br from-blue-900/95 to-indigo-900/95 dark:bg-gradient-to-br dark:from-black/95 dark:to-indigo-950/80 backdrop-blur-sm
  return (
    <header className="shadow-md bg-white dark:bg-grayish-600 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="min-w-24 w-32">
            <Logo />
          </div>

          <Navbar />

          <div className="flex items-center gap-8">
            <div className="hidden md:inline-block">
              {isLoggedIn ? (
                <UserProfile />
              ) : (
                <div className="w-56">
                  <AuthButtons />
                </div>
              )}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative">
            <button onClick={toggleMenu} className="p-2" ref={menuRef}>
              {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>

            {isMenuOpen && (
              <ProfileMenu
                onClose={() => setIsMenuOpen(false)}
                profileRef={menuRef}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

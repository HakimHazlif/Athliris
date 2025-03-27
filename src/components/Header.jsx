import { useEffect, useRef, useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'

import AuthButtons from '../features/auth/components/AuthButtons'
import Logo from './Logo'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import UserProfile from '../features/auth/components/UserProfile'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../api/firebase'
import { setUser, setUserFailure } from '../app/slices/authSlice'
import ProfileMenu from '../features/auth/components/ProfileMenu'

const Header = () => {
  const dispatch = useDispatch()
  const { isLoggedIn, error, status, user } = useSelector((state) => state.user)

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

  return (
    <header className="text-white shadow-md ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="w-32">
            <Logo />
          </div>

          <Navbar />

          <div className="hidden md:inline-block">
            {isLoggedIn ? (
              <UserProfile />
            ) : (
              <div className="w-56">
                <AuthButtons />
              </div>
            )}
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

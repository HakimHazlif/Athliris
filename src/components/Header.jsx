import { useEffect, useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'

import AuthButtons from '../features/auth/components/AuthButtons'
import Logo from './Logo'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import UserProfile from '../features/auth/components/UserProfile'
import { logOut } from '../api/apiAuth'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../api/firebase'
import { setUser } from '../app/slices/authSlice'

const Header = () => {
  const dispatch = useDispatch()
  const { isLoggedIn, error, status, user } = useSelector((state) => state.user)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        dispatch(logOut())
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  return (
    <header className="bg-slate-500 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="w-32">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <Navbar />

          {/* Auth Buttons */}
          <div className="hidden md:inline-block">
            {isLoggedIn ? <UserProfile /> : <AuthButtons />}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-indigo-700 space-y-3">
          <Navbar forDesktop={false} />
          <AuthButtons forDesktop={false} />
        </div>
      )}
    </header>
  )
}

export default Header

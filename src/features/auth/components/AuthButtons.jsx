import React from 'react'
import AuthButton from './AuthButton'

const AuthButtons = ({ forDesktop = true }) => {
  return (
    <div
      className={`flex items-center ${
        forDesktop
          ? 'space-x-3'
          : 'flex-col space-y-2 pt-2 border-t border-indigo-600'
      }`}
    >
      <AuthButton
        text="Log In"
        className="text-neon-500 hover:text-neon-600 bg-white hover:bg-neon-100"
      />
      <AuthButton
        text="Sign Up"
        className="text-white bg-neon-600 hover:bg-neon-700"
      />
    </div>
  )
}

export default AuthButtons

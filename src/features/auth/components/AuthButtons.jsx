import React from 'react'
import AuthButton from './AuthButton'

const AuthButtons = ({ forDesktop = true }) => {
  return (
    <div
      className={`flex items-center w-full ${
        forDesktop
          ? 'space-x-3'
          : 'flex-col space-y-2 pt-2 border-t border-indigo-600'
      }`}
    >
      <AuthButton
        text="Log In"
        className="text-neon-700 bg-neon-100 hover:bg-neon-200"
      />
      <AuthButton
        text="Sign Up"
        className="text-white bg-neon-600 hover:bg-neon-700"
      />
    </div>
  )
}

export default AuthButtons

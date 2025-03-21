import { Link } from 'react-router-dom'

const AuthHeader = ({ isLogin }) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {isLogin ? 'Log in to' : 'Create'} your Athliris account
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        {isLogin ? "Don't have an account" : 'Already have an account'}?{' '}
        <Link
          to={isLogin ? '/signup' : '/login'}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          {isLogin ? 'Sign up' : 'Log in'}
        </Link>
      </p>
    </div>
  )
}

export default AuthHeader

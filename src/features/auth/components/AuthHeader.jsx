import { Link } from 'react-router-dom'

const AuthHeader = ({ isLogin }) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-4xl font-extrabold leading-relaxed">
        {isLogin ? 'Log in to' : 'Create'} your{' '}
        <span className="text-neon-500">Athliris</span> account
      </h2>
      <p className="mt-2 text-center text-sm dark:text-grayish-300 text-grayish-400">
        {isLogin ? "Don't have an account" : 'Already have an account'}?{' '}
        <Link
          to={isLogin ? '/signup' : '/login'}
          className="font-medium text-neon-600 dark:hover:text-neon-500 hover:text-neon-500 hover:font-bold"
        >
          {isLogin ? 'Sign up' : 'Log in'}
        </Link>
      </p>
    </div>
  )
}

export default AuthHeader

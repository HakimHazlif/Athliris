import { FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { hero } from '../assets'
import { useSelector } from 'react-redux'
import { user } from '../app/slices/authSlice'

function Hero() {
  const { uid, username } = useSelector(user)
  const navigate = useNavigate()

  const handleNavigate = () => {
    if (uid) navigate(`/user/${username.replace(' ', '-')}/workouts`)
    else navigate('/signup')
  }
  return (
    <section className=" w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden h-[700px] -z-50">
        <img
          src={hero}
          alt="Athletic bodies"
          className="w-full h-full object-cover dark:opacity-50 opacity-80 [mask-image:linear-gradient(to_bottom,white,white,transparent)]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-grayish-700/60 to-grayish-700/40 [mask-image:linear-gradient(to_bottom,white,white,transparent)]" />
      </div>

      <div className="w-full max-w-3xl text-center">
        <div className="relative -z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-md">
            Welcome to <span className="text-neon-600">Athliris</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 drop-shadow-md [text-shadow:2px_2px_6px_rgba(0,0,0,1)]">
            Track your fitness journey, stay motivated, and become the best
            version of yourself with Athliris.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            className="flex items-center justify-center bg-gradient-to-r from-neon-600 to-teal-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded-full hover:shadow-lg hover:scale-105 transition duration-300 group"
            onClick={handleNavigate}
          >
            <span className="mr-2">Get Started</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

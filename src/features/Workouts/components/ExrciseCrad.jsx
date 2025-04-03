import { FaPlus } from 'react-icons/fa'
import {
  cardio,
  cycling,
  hiit,
  running,
  swimming,
  weightLifting,
  workout,
  yoga,
} from '../../../assets/index'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { user } from '../../../app/slices/authSlice'

const ExrciseCrad = ({ exercise, type }) => {
  const { username } = useSelector(user)
  const modifiedUsername = username.replace(' ', '-')
  const navigate = useNavigate()

  const { bodyParts, equipments, exerciseId, name } = exercise

  function getCardImage() {
    switch (type) {
      case 'running':
        return running
      case 'Cycling':
        return cycling
      case 'Swimming':
        return swimming
      case 'High-Intensity Interval Training (HIIT)':
        return hiit
      case 'Yoga':
        return yoga
      case 'Cardio':
        return cardio
      case 'Weight Lifting':
        return weightLifting
      default:
        return workout
    }
  }

  function handleNavigate(link) {
    navigate(link)
  }

  return (
    <div className="w-[220px] max-w-[260] min-w-[200px] mx-auto rounded-xl overflow-hidden shadow-xl dark:bg-grayish-600">
      <div
        className="p-6 flex justify-center items-center bg-cover bg-center rounded-xl w-full h-32 relative"
        style={{ backgroundImage: `url(${getCardImage()})` }}
      >
        <div className="absolute inset-0 bg-black/20 rounded-xl"></div>

        <button className="absolute right-2 top-2 w-8 h-8 flex justify-center items-center rounded-full bg-black/30 text-neon-300 font-semibold py-2 hover:text-white hover:bg-neon-600 transition z-40">
          <FaPlus />
        </button>
      </div>

      <div className="p-4 pt-2">
        <div className="h-16">
          <h3
            className="text-base drop-shadow-sm font-bold uppercase tracking-wider text-ellipsis line-clamp-2 cursor-pointer"
            onClick={() =>
              handleNavigate(`/user/${modifiedUsername}/workouts/${exerciseId}`)
            }
          >
            {name}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {bodyParts.map((part) => (
            <div
              key={part}
              onClick={() =>
                handleNavigate(
                  `/user/${modifiedUsername}/workouts/bodyPart/${part}`
                )
              }
              className="text-xs font-medium bg-blue-500 px-3 py-1 rounded-full cursor-pointer"
            >
              {part}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {equipments.map((equipment) => (
            <div
              key={equipment}
              onClick={() =>
                navigate(
                  `/user/${modifiedUsername}/workouts/equipment/${equipment}`
                )
              }
              className="text-xs font-medium bg-purple-500 px-3 py-1 rounded-full cursor-pointer"
            >
              {equipment}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExrciseCrad

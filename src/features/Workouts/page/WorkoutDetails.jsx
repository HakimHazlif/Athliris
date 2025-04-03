import { useSelector } from 'react-redux'
import Spinner from '../../../components/ui/Spinner'
import { useExrcise } from '../hooks/useExrcise'
import { user } from '../../../app/slices/authSlice'
import { useNavigate } from 'react-router-dom'

const WorkoutDetails = () => {
  const navigate = useNavigate()
  const { username } = useSelector(user)
  const modifiedUsername = username.replace(' ', '-')
  const { isLoading, data } = useExrcise()

  if (isLoading) return <Spinner />

  return (
    <div className="max-w-2xl mx-auto p-6 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-10 text-center capitalize ">
        {data?.name} exercise
      </h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-5">Instructions:</h2>
        <ul className="ml-5 text-gray-700 dark:text-gray-300">
          {data?.instructions.map((step, index) => (
            <li key={index} className="mb-3">
              Step {index + 1}: {step.slice(7)}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 mt-16">
        <div className="mb-2">
          <div className="flex items-center mb-2">
            <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300">
              Target Muscles
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {data?.targetMuscles.map((muscle, index) => (
              <span
                key={index}
                onClick={() =>
                  navigate(
                    `/user/${modifiedUsername}/workouts/muscle/${muscle}`
                  )
                }
                className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded cursor-pointer"
              >
                {muscle}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-2">
          <div className="flex items-center mb-2">
            <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300">
              Secondary Muscles
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {data?.secondaryMuscles.map((muscle, index) => (
              <span
                key={index}
                onClick={() =>
                  navigate(
                    `/user/${modifiedUsername}/workouts/muscle/${muscle}`
                  )
                }
                className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded cursor-pointer"
              >
                {muscle}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Body Parts:</h3>
          <ul className="flex flex-wrap gap-2 mb-4">
            {data?.bodyParts.map((part, index) => (
              <li
                key={index}
                className="text-xs font-medium bg-blue-500 px-3 py-1 rounded-full cursor-pointer"
                onClick={() =>
                  navigate(
                    `/user/${modifiedUsername}/workouts/bodyPart/${part}`
                  )
                }
              >
                {part}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Equipment:</h3>
          <ul className="flex flex-wrap gap-2 mb-4">
            {data?.equipments.map((equipment, index) => (
              <li
                key={index}
                className="text-xs font-medium bg-purple-500 px-3 py-1 rounded-full cursor-pointer"
                onClick={() =>
                  navigate(
                    `/user/${modifiedUsername}/workouts/equipment/${equipment}`
                  )
                }
              >
                {equipment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WorkoutDetails

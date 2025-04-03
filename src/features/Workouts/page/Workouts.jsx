import { useRecommandedExrcises } from '../hooks/useRecommandedExrcises'
import Spinner from '../../../components/ui/Spinner'
import ExerciseCard from '../components/ExrciseCrad'

const Workouts = () => {
  const { isLoading, data } = useRecommandedExrcises()

  if (isLoading) return <Spinner />
  console.log(data)

  return (
    <div>
      {data && data.length > 0 && (
        <div>
          {data.map(({ type, exercises }) => (
            <div key={type} className="my-10">
              <h3 className="text-3xl mb-4">{type} Recommanded</h3>
              <div className={`flex flex-wrap gap-4`}>
                {exercises.map((ex) => (
                  <ExerciseCard key={ex.exerciseId} type={type} exercise={ex} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Workouts

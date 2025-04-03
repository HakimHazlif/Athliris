import { useParams } from 'react-router-dom'
import Spinner from '../../../components/ui/Spinner'
import ExrciseCrad from '../components/ExrciseCrad'
import EmptyState from '../components/EmptyState'

import { useExercisesByMuscle } from '../hooks/useExercisesByMuscle'

const WorkoutByMuscle = () => {
  const { muscle } = useParams()
  const { isLoading, data } = useExercisesByMuscle()

  if (isLoading) return <Spinner />

  return (
    <div className="my-10">
      <h3 className="text-3xl mb-4 capitalize">{muscle} Trainings</h3>
      {!data?.length ? (
        <EmptyState dataType={muscle} />
      ) : (
        <div className={`flex flex-wrap gap-4`}>
          {data?.map((ex) => (
            <ExrciseCrad key={ex.exerciseId} type={muscle} exercise={ex} />
          ))}
        </div>
      )}
    </div>
  )
}

export default WorkoutByMuscle

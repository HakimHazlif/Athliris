import Spinner from '../../../components/ui/Spinner'
import { useSelectedExercises } from '../hooks/useSelectedExercises'
import EmptyState from '../../workouts/components/EmptyState'
import ExrciseCrad from '../../workouts/components/ExrciseCrad'

const Progress = () => {
  const { data, isLoading } = useSelectedExercises()

  if (isLoading) return <Spinner />

  return (
    <div className="my-10">
      <h3 className="text-3xl mb-4 capitalize">Training program</h3>
      {!data?.length ? (
        <EmptyState dataType="" />
      ) : (
        <div className={`flex flex-wrap gap-4`}>
          {data?.map((ex) => (
            <ExrciseCrad key={ex.exerciseId} type={ex.type} exercise={ex} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Progress

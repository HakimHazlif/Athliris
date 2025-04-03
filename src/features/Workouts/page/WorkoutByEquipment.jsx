import { useParams } from 'react-router-dom'
import { useExercisesByEquipment } from '../hooks/useExerciseByEquipment'
import Spinner from '../../../components/ui/Spinner'
import ExrciseCrad from '../components/ExrciseCrad'
import EmptyState from '../components/EmptyState'

const WorkoutByEquipment = () => {
  const { equipment } = useParams()
  const { isLoading, data } = useExercisesByEquipment()

  if (isLoading) return <Spinner />

  return (
    <div className="my-10">
      <h3 className="text-3xl mb-4 capitalize">{equipment} Trainings</h3>
      {!data.length ? (
        <EmptyState dataType={equipment} />
      ) : (
        <div className={`flex flex-wrap gap-4`}>
          {data?.map((ex) => (
            <ExrciseCrad key={ex.exerciseId} type={equipment} exercise={ex} />
          ))}
        </div>
      )}
    </div>
  )
}

export default WorkoutByEquipment

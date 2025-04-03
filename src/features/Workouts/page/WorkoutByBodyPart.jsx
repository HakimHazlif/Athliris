import { useParams } from 'react-router-dom'
import { useExercisesByBodyPart } from '../hooks/useExercisesBybodyPart'
import Spinner from '../../../components/ui/Spinner'
import ExerciseCard from '../components/ExrciseCrad'
import EmptyState from '../components/EmptyState'

const WorkoutByBodyPart = () => {
  const { bodyPart } = useParams()
  const { isLoading, data } = useExercisesByBodyPart()

  if (isLoading) return <Spinner />

  return (
    <div className="my-10">
      <h3 className="text-3xl mb-4 capitalize">{bodyPart} Trainings</h3>
      {!data.length ? (
        <EmptyState dataType={bodyPart} />
      ) : (
        <div className={`flex flex-wrap gap-4`}>
          {data?.map((ex) => (
            <ExerciseCard key={ex.exerciseId} type={bodyPart} exercise={ex} />
          ))}
        </div>
      )}
    </div>
  )
}

export default WorkoutByBodyPart

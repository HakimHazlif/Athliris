import { useQuery } from '@tanstack/react-query'
import { getRecommandedExrcises } from '../api/apiWorkout'
import { useSelector } from 'react-redux'
import { healthFitnessUser } from '../../../app/slices/userDataSlice'
import toast from 'react-hot-toast'

export function useRecommandedExrcises() {
  const { fitnessLevel } = useSelector(healthFitnessUser)
  const exercises = fitnessLevel.exerciseTypes

  console.log(exercises)

  const { isLoading, data } = useQuery({
    queryKey: ['recommandedExrcises', exercises],
    queryFn: () => getRecommandedExrcises(exercises),
    enabled: exercises.length > 0,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 60,
    onError: (err) => {
      toast.error(err)
    },
  })

  return { isLoading, data }
}

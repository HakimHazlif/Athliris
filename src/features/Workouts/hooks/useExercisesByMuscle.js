import { useQuery } from '@tanstack/react-query'
import { getExercisesByMuscle } from '../api/apiWorkout'

import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

export function useExercisesByMuscle() {
  const { muscle } = useParams()

  const { isLoading, data } = useQuery({
    queryKey: ['exrcisesbyMuscle', muscle],
    queryFn: () => getExercisesByMuscle(muscle),
    enabled: !!muscle,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 60,
    onError: (err) => {
      toast.error(err)
    },
  })

  return { isLoading, data }
}

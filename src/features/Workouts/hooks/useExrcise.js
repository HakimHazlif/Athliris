import { useQuery } from '@tanstack/react-query'
import { getExrcise } from '../api/apiWorkout'

import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

export function useExrcise() {
  const { exerciseId } = useParams()

  const { isLoading, data } = useQuery({
    queryKey: ['exrcises', exerciseId],
    queryFn: () => getExrcise(exerciseId),
    enabled: !!exerciseId,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 60,
    onError: (err) => {
      toast.error(err)
    },
  })

  return { isLoading, data }
}

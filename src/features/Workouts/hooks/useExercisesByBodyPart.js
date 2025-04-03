import { useQuery } from '@tanstack/react-query'
import { getExercisesByBodyPart } from '../api/apiWorkout'

import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

export function useExercisesByBodyPart() {
  const { bodyPart } = useParams()

  const { isLoading, data } = useQuery({
    queryKey: ['exrcisesByBodyPart', bodyPart],
    queryFn: () => getExercisesByBodyPart(bodyPart),
    enabled: !!bodyPart,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 60,
    onError: (err) => {
      toast.error(err)
    },
  })

  return { isLoading, data }
}

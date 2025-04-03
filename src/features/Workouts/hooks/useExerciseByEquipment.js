import { useQuery } from '@tanstack/react-query'
import { getExercisesByEquipment } from '../api/apiWorkout'

import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

export function useExercisesByEquipment() {
  const { equipment } = useParams()

  console.log(equipment)

  const { isLoading, data } = useQuery({
    queryKey: ['exrcisesByEquipment', equipment],
    queryFn: () => getExercisesByEquipment(equipment),
    enabled: !!equipment,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 60,
    onError: (err) => {
      toast.error(err)
    },
  })

  return { isLoading, data }
}

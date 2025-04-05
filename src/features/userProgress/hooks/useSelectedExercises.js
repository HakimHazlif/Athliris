import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { user } from '../../../app/slices/authSlice'
import { getSelectedExercises } from '../api/apiExercises'

export function useSelectedExercises() {
  const { uid } = useSelector(user)

  const { isLoading, data } = useQuery({
    queryKey: ['selectedExercises', uid],
    queryFn: () => getSelectedExercises(uid),
    enabled: !!uid,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 60,
    onError: (err) => {
      toast.error(err.message || 'An error occurred')
    },
  })

  return { isLoading, data }
}

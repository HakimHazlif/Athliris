import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { user } from '../../../app/slices/authSlice'
import { deleteExercise } from '../api/apiExercises'

export function useDeleteExercise() {
  const { uid } = useSelector(user)
  const queryClient = useQueryClient()

  const { isLoading, data, mutate } = useMutation({
    mutationFn: deleteExercise,
    enabled: !!uid,
    onSuccess: () => {
      queryClient.invalidateQueries(['selectedExercises', uid])
      toast.success('Exercise deleted successfully!')
    },
    onError: (err) => {
      toast.error(err.message || 'An error occurred')
    },
  })

  return { isLoading, data, mutate }
}

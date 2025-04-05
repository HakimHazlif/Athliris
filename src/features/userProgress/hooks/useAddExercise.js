import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { user } from '../../../app/slices/authSlice'
import { addExercise } from '../api/apiExercises'

export function useAddExercise() {
  const { uid } = useSelector(user)
  const queryClient = useQueryClient()

  const { isLoading, data, mutate } = useMutation({
    mutationFn: addExercise,
    enabled: !!uid,
    onSuccess: () => {
      queryClient.invalidateQueries(['selectedExercises', uid])
      toast.success('Exercise added successfully!')
    },
    onError: (err) => {
      toast.error(err.message || 'An error occurred')
    },
  })

  return { isLoading, data, mutate }
}

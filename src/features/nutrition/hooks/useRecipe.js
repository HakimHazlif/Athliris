import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { getRecipeById } from '../api/apiNutrition'
import { useParams } from 'react-router-dom'

export function useRecipe() {
  const { id } = useParams()

  const { isLoading, data } = useQuery({
    queryKey: ['recipe', id],
    queryFn: () => getRecipeById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60 * 24,
    onError: (err) => {
      toast.error(err)
    },
  })

  return { isLoading, data }
}

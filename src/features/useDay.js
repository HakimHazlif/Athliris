import { useQuery } from '@tanstack/react-query'
import { getDay } from '../services/api-exrcises'

export function useDay() {
  const { isLoading, data } = useQuery({
    queryKey: ['day'],
    queryFn: getDay,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    },
    staleTime: 1000 * 60 * 5,
  })

  return { isLoading, data }
}

import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { healthFitnessUser } from '../../../app/slices/userDataSlice'
import { getRecipes } from '../api/apiNutrition'

export function useRecipes() {
  const { dietaryPreferences, medicalHistory } = useSelector(healthFitnessUser)
  const diet = dietaryPreferences.dietType
  const isDiabetes = medicalHistory.conditions.some((con) => con === 'diabetes')
  const conditions = medicalHistory.conditions
    .map((con) => con.replace(' ', '-'))
    .join(',')
  const restrictions = isDiabetes
    ? dietaryPreferences.restrictions
        .push('diabetes')
        .map((res) => res.replace(' ', '-'))
        .join(',')
    : dietaryPreferences.restrictions
        .map((res) => res.replace(' ', '-'))
        .join(',')

  const { isLoading, data } = useQuery({
    queryKey: ['recipes', diet],
    queryFn: () => getRecipes(diet, conditions, restrictions),
    enabled: !!diet,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60 * 24,
    onError: (err) => {
      toast.error(err)
    },
  })

  return { isLoading, data }
}

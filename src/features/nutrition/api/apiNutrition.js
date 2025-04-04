import axios from 'axios'
import { apiKey, spoonacularUrl } from './constants'

export async function getRecipes(diet, conditions, restrictions) {
  if (!diet) return

  console.log({ diet, conditions, restrictions })

  try {
    const url = `${spoonacularUrl}/recipes/complexSearch?apiKey=${apiKey}&diet=${diet}&intolerances=${restrictions}&addRecipeInformation=true&addRecipeNutrition=true&tags=health fitness ${conditions}&maxReadyTime=120&sort=calories&number=20&query=dish`

    const response = await axios.get(url)

    return response?.data?.results
  } catch {
    throw new Error('Failed to find any recipe')
  }
}

export async function getRecipeById(id) {
  if (!id) return

  try {
    const url = `${spoonacularUrl}/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`

    const response = await axios.get(url)

    return response?.data
  } catch {
    throw new Error('Failed to find this recipe')
  }
}

import { useRecipes } from '../hooks/useRecipes'
import Spinner from '../../../components/ui/Spinner'
import RecipeCard from '../components/RecipeCard'

const Nutrition = () => {
  const { isLoading, data } = useRecipes()

  if (isLoading) return <Spinner />

  return (
    <div>
      <div className="py-10">
        <h2 className="w-full text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          Smart Nutrition Choices
        </h2>
        <p className="w-full text-sm text-gray-600 dark:text-gray-300">
          Discover meals that support a balanced and healthy lifestyle—tailored
          for your well-being.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 gap-y-8">
        {data?.map((rec) => (
          <RecipeCard key={rec.id} recipe={rec} />
        ))}
      </div>
    </div>
  )
}

export default Nutrition

import { FaHeart, FaShareAlt } from 'react-icons/fa'
import { useRecipe } from '../hooks/useRecipe'
import Spinner from '../../../components/ui/Spinner'

const RecipePage = () => {
  const { isLoading, data } = useRecipe()

  const formattedContent = data?.summary
    .split('\r\n\r\n')
    .map((paragraph, index) => {
      if (index === 0) {
        return `<p class="text-xl font-semibold mb-4 dark:text-white">${paragraph}</p>`
      } else if (paragraph.includes('$')) {
        return `<p class="text-lg text-green-500 mb-4 dark:text-green-400">${paragraph}</p>`
      } else if (
        paragraph.includes('calories') ||
        paragraph.includes('protein') ||
        paragraph.includes('fat')
      ) {
        return `<p class="text-lg font-medium mb-4 dark:text-gray-300">${paragraph}</p>`
      } else if (paragraph.includes('30 minutes')) {
        return `<p class="text-lg italic mb-4 dark:text-gray-400">${paragraph}</p>`
      } else {
        return `<p class="text-lg mb-4 dark:text-gray-200">${paragraph}</p>`
      }
    })
    .join('')

  if (isLoading) return <Spinner />

  return (
    <div className="min-h-screen bg-white dark:bg-grayish-600 rounded-lg">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center">
          {data?.title && (
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
          )}
          <img
            src={data?.image}
            alt={data?.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-6 text-center">
          <div className="mb-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ready in {data?.readyInMinutes} minutes | Servings:{' '}
              {data?.servings}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Health Score: {data?.healthScore}
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc pl-5">
            {data?.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id} className="mb-2 text-lg">
                {ingredient.amount} {ingredient.unit} {ingredient.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ul className="list-decimal pl-5">
            {data?.analyzedInstructions.map((instruction, index) => (
              <li key={index} className="mb-2 text-lg">
                {instruction.steps.map((step, stepIndex) => (
                  <p key={stepIndex} className="mb-2">
                    <span>Step {step.number}:</span> {step.step}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecipePage

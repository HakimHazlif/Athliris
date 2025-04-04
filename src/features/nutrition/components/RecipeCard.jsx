import React from 'react'

import {
  FaFire,
  FaGlobe,
  FaPlus,
  FaRegCalendarCheck,
  FaRegClock,
  FaRegUser,
} from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { user } from '../../../app/slices/authSlice'

const RecipeCard = ({ recipe }) => {
  const {
    id,
    title,
    image,
    readyInMinutes,
    servings,
    veryHealthy,
    dishTypes = [],
    diets = [],
    occasions = [],
    nutrition,
  } = recipe || {}

  const { username } = useSelector(user)
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/user/${username.replace(' ', '-')}/nutrition/recipe/${id}`)
  }

  const getDietBadgeColor = (diet) => {
    const dietColors = {
      vegetarian: 'bg-green-500/10 dark:text-green-300',
      vegan: 'bg-teal-500/10 dark:text-teal-300',
      'gluten free': 'bg-yellow-500/10 dark:text-yellow-300',
      'dairy free': 'bg-blue-500/10 dark:text-blue-300',
      paleolithic: 'bg-amber-500/10 dark:text-amber-300',
      primal: 'bg-orange-500/10 dark:text-orange-300',
      'whole 30': 'bg-red-500/10 dark:text-red-300',
      default: 'bg-purple-500/10 dark:text-purple-300',
    }

    return dietColors[diet.toLowerCase()] || dietColors.default
  }

  const calories = nutrition?.nutrients?.find(
    (nutrient) => nutrient.name === 'Calories'
  )

  return (
    <div className="w-[340px] h-[480px] mx-auto flex flex-col overflow-hidden rounded-xl shadow-xl dark:bg-grayish-600">
      <div className="relative h-56 overflow-hidden rounded-xl">
        {image && (
          <div className="relative h-full overflow-hidden">
            <img
              src={image}
              alt={title || 'Recipe Image'}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <button className="absolute right-2 top-2 w-8 h-8 flex justify-center items-center rounded-full bg-black/30 text-neon-300 font-semibold py-2 hover:text-white hover:bg-neon-600 transition z-40">
              <FaPlus />
            </button>

            {veryHealthy && (
              <span className="absolute top-2 left-2 px-2 py-1 bg-neon-700 text-white text-xs rounded-md">
                Healthy
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between h-full p-5">
        <div className="dark:text-gray-100 ">
          <div className="flex-1">
            {title && (
              <h3
                className="text-xl font-bold mb-4 cursor-pointer"
                onClick={handleNavigate}
              >
                {title}
              </h3>
            )}
            <div className="flex flex-wrap justify-between gap-3 mt-3 mb-4">
              {readyInMinutes && (
                <div className="flex items-center text-sm dark:text-gray-300">
                  <FaRegClock size={18} className="text-teal-500 mr-1" />
                  <span>{readyInMinutes} min</span>
                </div>
              )}

              {servings && (
                <div className="flex items-center text-sm dark:text-gray-300">
                  <FaRegUser size={18} className="text-blue-500 mr-1" />
                  <span>
                    {servings} {servings > 1 ? 'servings' : 'serving'}
                  </span>
                </div>
              )}

              {calories && (
                <div className="flex items-center text-sm dark:text-gray-300">
                  <FaFire size={18} className="text-orange-500 mr-1" />
                  <span>
                    {Math.round(calories.amount)} {calories.unit}
                  </span>
                </div>
              )}
            </div>
            {diets && diets.length > 0 && (
              <div className="flex flex-wrap gap-2 my-3">
                {diets.map((diet, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 ${getDietBadgeColor(diet)} text-xs rounded-md`}
                  >
                    {diet}
                  </span>
                ))}
              </div>
            )}
            {dishTypes && dishTypes.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {dishTypes.map((type, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-indigo-500/10 dark:text-indigo-300 text-xs rounded-md"
                  >
                    {type}
                  </span>
                ))}
              </div>
            )}
            {occasions && occasions.length > 0 && (
              <div className="flex items-center gap-2 mb-3 text-sm dark:text-gray-300">
                <FaRegCalendarCheck size={16} className="text-violet-500" />
                <span>Suitable for: {occasions.join(', ')}</span>
              </div>
            )}
          </div>
        </div>
        <button
          className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-teal-600 to-neon-600 text-white rounded-md hover:from-teal-700 hover:to-neon-700 transition-all duration-300 font-medium"
          onClick={handleNavigate}
        >
          Show the Recipe
        </button>
      </div>
    </div>
  )
}

export default RecipeCard

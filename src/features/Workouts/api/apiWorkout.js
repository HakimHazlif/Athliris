import axios from 'axios'
import { exercisedbUrlBase } from './constants'

export async function getRecommandedExrcises(exercises = []) {
  // if (!exercises.length) throw new Error('there no exercise recommanded')

  const urls = exercises.map(
    (ex) => `${exercisedbUrlBase}/exercises?search=${ex}&limit=3`
  )

  const exercisesData = await axios.all(urls.map((url) => axios.get(url)))

  console.log(exercisesData)

  return exercisesData
    .map((result, index) => {
      const exercisesData = result?.data?.data?.exercises || []
      return exercisesData.length
        ? { type: exercises[index], exercises: exercisesData }
        : null
    })
    .filter(Boolean)
}

export async function getExrcise(exerciseId) {
  // if (!exercises.length) throw new Error('there no exercise recommanded')
  if (!exerciseId)
    throw new Error('This exercise does not exist or is unavailable')

  const url = `${exercisedbUrlBase}/exercises/${exerciseId}`

  const exerciseData = await axios.get(url)

  console.log(exerciseData)

  return exerciseData?.data?.data
}

export async function getExercisesByBodyPart(bodyPart) {
  if (!bodyPart)
    throw new Error('This body part does not exist or is unavailable')

  const url = `${exercisedbUrlBase}/bodyparts/${bodyPart}/exercises`

  const exerciseData = await axios.get(url)

  console.log(exerciseData)

  return exerciseData?.data?.data?.exercises
}

export async function getExercisesByEquipment(equipment) {
  if (!equipment)
    throw new Error('This equipment does not exist or is unavailable')

  const url = `${exercisedbUrlBase}/equipments/${equipment}/exercises`

  const exerciseData = await axios.get(url)

  console.log(exerciseData)

  return exerciseData?.data?.data?.exercises
}

export async function getExercisesByMuscle(muscle) {
  if (!muscle) throw new Error('This muscle does not exist or is unavailable')

  const url = `${exercisedbUrlBase}/muscles/${muscle}/exercises`

  const exerciseData = await axios.get(url)

  console.log(exerciseData)

  return exerciseData?.data?.data?.exercises
}

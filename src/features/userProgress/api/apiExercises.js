import { db } from '../../../api/firebase'
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore'

export const addExercise = async ({ exercise, userId }) => {
  console.log({ exercise, userId })
  if (!userId) throw new Error('You need to log in')

  const fitnessRef = doc(db, 'fitnessProfiles', userId)

  try {
    await updateDoc(fitnessRef, {
      selectedExercises: arrayUnion(exercise),
    })
  } catch (error) {
    throw new Error(error?.message || 'Unexpected  Error!')
  }
}

export const deleteExercise = async ({ exercise, userId }) => {
  if (!userId) throw new Error('You need to log in')

  const fitnessRef = doc(db, 'fitnessProfiles', userId)

  try {
    await updateDoc(fitnessRef, {
      selectedExercises: arrayRemove(exercise),
    })
  } catch (error) {
    throw new Error(error?.message || 'Unexpected  Error!')
  }
}

export const getSelectedExercises = async (userId) => {
  if (!userId) throw new Error('You need to log in')

  const fitnessRef = doc(db, 'fitnessProfiles', userId)

  const docSnap = await getDoc(fitnessRef)

  if (docSnap.exists()) {
    const data = docSnap.data()

    return data.selectedExercises
  } else {
    throw new Error('No such document!')
  }
}

import { createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../../../api/firebase'
import { doc, getDoc } from 'firebase/firestore'

export const getFitnessProfile = createAsyncThunk(
  'fitnessProfile/read',
  async (userId, { rejectWithValue }) => {
    try {
      const docRef = doc(db, 'fitnessProfiles', userId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        console.log(docSnap.data())
        return docSnap.data()
      } else {
        return rejectWithValue(new Error('No such document!'))
      }
    } catch (error) {
      console.log(error)
      return rejectWithValue(error?.message || new Error('No such document!'))
    }
  }
)

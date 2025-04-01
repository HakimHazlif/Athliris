import { createAsyncThunk } from '@reduxjs/toolkit'
import { modifyUserData } from '../utils/fns'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../../api/firebase'
import { user } from '../../../app/slices/authSlice'

export const createFitnessProfile = createAsyncThunk(
  'fitnessProfiles/create',
  async ({ userId, surveyData }, { rejectWithValue }) => {
    try {
      const modifiedSurveyData = modifyUserData(surveyData)

      console.log({ modifiedSurveyData, userId })
      // await setDoc(doc(db, 'fitnessProfiles', userId), surveyData)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

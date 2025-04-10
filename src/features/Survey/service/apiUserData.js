import { createAsyncThunk } from '@reduxjs/toolkit'
import { modifyUserData } from '../utils/fns'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../../api/firebase'

export const createFitnessProfile = createAsyncThunk(
  'fitnessProfile/create',
  async ({ userId, surveyData }, { rejectWithValue }) => {
    try {
      const modifiedSurveyData = modifyUserData(surveyData)

      console.log({ modifiedSurveyData, userId })
      await setDoc(doc(db, 'fitnessProfiles', userId), modifiedSurveyData)
    } catch (error) {
      return rejectWithValue(error?.message)
    }
  }
)

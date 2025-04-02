import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { createFitnessProfile } from '../../features/survey/service/apiUserData'
import toast from 'react-hot-toast'
import { getFitnessProfile } from '../../features/fitnessProfile/api/apiFitnessProfile'

const initialState = {
  user: {
    personalData: {
      birthDate: '',
      gender: '',
      height: '',
      weight: '',
      activityLevel: '',
    },
    medicalHistory: {
      conditions: [],
      otherCondition: '',
      physicalLimitations: '',
      injuries: '',
      medications: '',
      allergies: '',
    },
    fitnessGoals: {
      primaryObjective: '',
      targetWeight: '', // kg or lbs
      desiredWeightChange: '', // kg or lbs
      targetBodyFat: '', // %
      desiredMuscleIncrease: '',
      shortTermGoals: '',
      longTermGoals: '',
      performanceTargets: '',
    },
    dietaryPreferences: {
      dietType: '',
      otherDietType: '',
      restrictions: [],
      otherRestriction: '',
      trackingPreferences: [],
    },
    fitnessLevel: {
      experienceLevel: '',
      workoutFrequency: '',
      workoutDuration: '',
      exerciseTypes: [],
      otherExerciseType: '',
    },
    availableEquipment: {
      availableEquipment: '',
      exerciseLocations: [],
      otherLocation: '',
    },
    technologyTracking: {
      fitnessDevices: [],
      notificationTypes: [],
    },
    userAgreements: {
      termsOfServiceAgreement: true,
      privacyPolicyAgreement: true,
      dataConsentAgreement: true,
    },
    unit: 'metric',
  },
  stage: 1,
  error: null,
  status: 'idle',
}

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setPersonalData: (state, action) => {
      state.user.personalData = action.payload
    },
    setMedicalHistory: (state, action) => {
      state.user.medicalHistory = action.payload
    },
    setFitnessGoals: (state, action) => {
      state.user.fitnessGoals = action.payload
    },
    setDietaryPreferences: (state, action) => {
      state.user.dietaryPreferences = action.payload
    },
    setFitnessLevel: (state, action) => {
      state.user.fitnessLevel = action.payload
    },
    setAvailableEquipment: (state, action) => {
      state.user.availableEquipment = action.payload
    },
    setTechnologyTracking: (state, action) => {
      state.user.technologyTracking = action.payload
    },
    setUserAgreements: (state, action) => {
      state.user.userAgreements = action.payload
    },
    getNextStage: (state) => {
      const stageNum = state.stage
      if (stageNum <= 7) state.stage += 1
    },
    getStageBack: (state) => {
      const stageNum = state.stage
      if (stageNum > 1) state.stage -= 1
    },
    resetUserData: () => initialState,
    switchUnit: (state) => {
      if (state.user.unit === 'metric') {
        state.user.unit = 'imperial'
        state.user.personalData.height =
          Number(state.user.personalData.height) * 0.393700787
        state.user.personalData.weight =
          Number(state.user.personalData.weight) * 2.20462262

        state.user.fitnessGoals.targetWeight =
          Number(state.user.fitnessGoals.targetWeight) * 2.20462262
        state.user.fitnessGoals.desiredWeightChange =
          Number(state.user.fitnessGoals.desiredWeightChange) * 2.20462262
      } else {
        state.user.unit = 'metric'
        state.user.personalData.height =
          Number(state.user.personalData.height) * 2.54
        state.user.personalData.weight =
          Number(state.user.personalData.weight) * 0.45359237

        state.user.fitnessGoals.targetWeight =
          Number(state.user.fitnessGoals.targetWeight) * 0.45359237
        state.user.fitnessGoals.desiredWeightChange =
          Number(state.user.fitnessGoals.desiredWeightChange) * 0.45359237
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFitnessProfile.fulfilled, (state) => {
        state.error = null
        state.status = 'succeeded'
        toast.success('Your information has been saved')
      })
      .addCase(getFitnessProfile.fulfilled, (state, action) => {
        state.error = null
        state.status = 'succeeded'
        state.user = action.payload
      })

    builder
      .addMatcher(
        isAnyOf(createFitnessProfile.pending, getFitnessProfile.pending),
        (state) => {
          state.error = null
          state.status = 'loading'
        }
      )
      .addMatcher(
        isAnyOf(createFitnessProfile.rejected, getFitnessProfile.rejected),
        (state, action) => {
          state.error = action.payload
          state.status = 'failed'
          toast.error(action.payload)
        }
      )
  },
})

export const {
  setPersonalData,
  setMedicalHistory,
  setFitnessGoals,
  setDietaryPreferences,
  setFitnessLevel,
  setAvailableEquipment,
  setTechnologyTracking,
  setUserAgreements,
  resetUserData,
  getNextStage,
  getStageBack,
  switchUnit,
} = userDataSlice.actions

export const healthFitnessUser = (state) => state.userData.user

export default userDataSlice.reducer

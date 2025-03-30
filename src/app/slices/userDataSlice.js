import { createSlice } from '@reduxjs/toolkit'
import { validateUserData } from '../../features/Survey/service/apiUserData'

const initialState = {
  user: {
    personalData: {
      fullName: '',
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
      targetWeight: '',
      weightUnit: '',
      desiredWeightChange: '',
      targetBodyFat: '',
      desiredMuscleIncrease: '',
      shortTermGoals: '',
      longTermGoals: '',
      performanceTargets: '',
    },
    dietaryPreferences: {
      dietType: '',
      otherDietType: '',
      restrictions: {
        glutenIntolerance: false,
        lactoseIntolerance: false,
        nutAllergies: false,
        other: false,
      },
      otherRestriction: '',
      trackingPreferences: {
        macroTracking: false,
        calorieCountting: false,
        mealPlanning: false,
      },
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
      fitnessDevices: [],
    },
    technologyTracking: {
      fitnessDevices: [],
      notificationTypes: [],
    },
  },
  stage: 8,
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
      state.user.preferredNotificationTypes = action.payload
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(validateUserData.pending, (state) => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(validateUserData.rejected, (state, action) => {
        state.error = action.payload
        state.status = 'failed'
      })
      .addCase(validateUserData.fulfilled, (state) => {
        state.error = null
        state.status = 'succeeded'
      })
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
  resetUserData,
  getNextStage,
  getStageBack,
} = userDataSlice.actions

export const healthFitnessUser = (state) => state.userData.user

export default userDataSlice.reducer

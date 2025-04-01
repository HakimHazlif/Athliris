import { Timestamp } from 'firebase/firestore'

export function modifyUserData(userData) {
  const modifiedData = {
    ...userData,
    personalData: {
      ...userData.personalData,
      birthDate: Timestamp.fromDate(new Date(userData.personalData.birthDate)),
    },
    medicalHistory: {
      ...userData.medicalHistory,
      conditions: userData.medicalHistory.otherCondition
        ? [
            ...userData.medicalHistory.conditions,
            userData.medicalHistory.otherCondition,
          ].filter((el) => el !== 'Other')
        : userData.medicalHistory.conditions,
    },
    dietaryPreferences: {
      ...userData.dietaryPreferences,
      dietType: userData.dietaryPreferences.otherDietType
        ? userData.dietaryPreferences.otherDietType
        : userData.dietaryPreferences.dietType,

      restrictions: userData.dietaryPreferences.otherRestriction
        ? [
            ...userData.dietaryPreferences.restrictions,
            userData.dietaryPreferences.otherRestriction,
          ].filter((el) => el !== 'Other')
        : userData.dietaryPreferences.restrictions,
    },
    fitnessLevel: {
      ...userData.fitnessLevel,
      exerciseTypes: userData.fitnessLevel.otherExerciseType
        ? [
            ...userData.fitnessLevel.exerciseTypes,
            userData.fitnessLevel.otherExerciseType,
          ].filter((el) => el !== 'Other')
        : userData.fitnessLevel.exerciseTypes,
    },
    availableEquipment: {
      ...userData.availableEquipment,
      exerciseLocations: userData.availableEquipment.otherLocation
        ? [
            ...userData.availableEquipment.exerciseLocations,
            userData.availableEquipment.otherLocation,
          ].filter((el) => el !== 'Other')
        : userData.availableEquipment.exerciseLocations,
    },
  }

  delete modifiedData.medicalHistory.otherCondition
  delete modifiedData.dietaryPreferences.otherDietType
  delete modifiedData.dietaryPreferences.otherRestriction
  delete modifiedData.fitnessLevel.otherExerciseType
  delete modifiedData.availableEquipment.otherLocation

  return modifiedData
}

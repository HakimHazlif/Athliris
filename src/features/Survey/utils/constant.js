export const fieldIconStyle = 'h-5 w-5 text-gray-700 dark:text-grayish-400'

export const initialPersonalDataValues = {
  fullName: '',
  birthDate: '',
  gender: '',
  height: '',
  weight: '',
  activityLevel: '',
}

export const initialMedicalHistoryValues = {
  medicalConditions: [],
  otherCondition: '',
  physicalLimitations: '',
  injuries: '',
  medications: '',
  allergies: '',
}

export const activityLevels = [
  {
    id: 'sedentary',
    label: 'Sedentary (less than 30 minutes per day)',
    icon: null,
  },
  {
    id: 'lightly-active',
    label: 'Lightly active (30-60 minutes daily)',
    icon: null,
  },
  {
    id: 'moderately-active',
    label: 'Moderately active (60-90 minutes daily)',
    icon: null,
  },
  {
    id: 'very-active',
    label: 'Very active (more than 90 minutes daily)',
    icon: null,
  },
]

export const medicalConditions = [
  {
    id: 'diabetes',
    label: 'Diabetes',
    icon: null,
  },
  {
    id: 'hypertension',
    label: 'Hypertension',
    icon: null,
  },
  {
    id: 'heartConditions',
    label: 'Heart Conditions',
    icon: null,
  },
  {
    id: 'respiratoryIssues',
    label: 'Respiratory Issues',
    icon: null,
  },
  {
    id: 'other',
    label: 'Other',
    icon: null,
  },
  {
    id: 'none',
    label: 'None',
    icon: null,
  },
]

export const fitnessObjectives = [
  { id: 'weightLoss', label: 'Weight Loss', icon: null },
  { id: 'muscleGain', label: 'Muscle Gain', icon: null },
  {
    id: 'cardiovascular',
    label: 'Improve Cardiovascular Fitness',
    icon: null,
  },
  { id: 'flexibility', label: 'Increase Flexibility', icon: null },
  { id: 'athleticPerformance', label: 'Athletic Performance', icon: null },
  { id: 'generalHealth', label: 'General Health Maintenance', icon: null },
]

export const dietTypes = [
  { id: 'standard', label: 'Standard Diet', icon: null },
  { id: 'vegetarian', label: 'Vegetarian', icon: null },
  { id: 'vegan', label: 'Vegan', icon: null },
  { id: 'keto', label: 'Keto', icon: null },
  { id: 'paleo', label: 'Paleo', icon: null },
  { id: 'mediterranean', label: 'Mediterranean', icon: null },
  { id: 'other', label: 'Other', icon: null },
]

export const dietaryRestrictions = [
  { id: 'glutenIntolerance', label: 'Gluten Intolerance', icon: null },
  { id: 'lactoseIntolerance', label: 'Lactose Intolerance', icon: null },
  { id: 'nutAllergies', label: 'Nut Allergies', icon: null },
  { id: 'other', label: 'Other', icon: null },
]

export const trackingPreferences = [
  { id: 'macroTracking', label: 'Interested in Macro Tracking', icon: null },
  { id: 'calorieCountting', label: 'Calorie Counting', icon: null },
  { id: 'mealPlanning', label: 'Meal Planning Support', icon: null },
]

export const experienceLevels = [
  { id: 'beginner', label: 'Beginner', icon: null },
  { id: 'intermediate', label: 'Intermediate', icon: null },
  { id: 'advanced', label: 'Advanced', icon: null },
]

export const frequencyOptions = [
  { id: '0', label: '0 days per week', icon: null },
  { id: '1-2', label: '1-2 days per week', icon: null },
  { id: '3-4', label: '3-4 days per week', icon: null },
  { id: '5-6', label: '5-6 days per week', icon: null },
  { id: '7', label: '7 days per week', icon: null },
]

export const durationOptions = [
  { id: 'less30', label: 'Less than 30 minutes', icon: null },
  { id: '30-45', label: '30-45 minutes', icon: null },
  { id: '45-60', label: '45-60 minutes', icon: null },
  { id: '60-90', label: '60-90 minutes', icon: null },
  { id: 'more90', label: 'More than 90 minutes', icon: null },
]

export const exerciseTypes = [
  { id: 'strengthTraining', label: 'Strength Training', icon: null },
  { id: 'cardio', label: 'Cardio', icon: null },
  { id: 'yoga', label: 'Yoga', icon: null },
  { id: 'hiit', label: 'High-Intensity Interval Training (HIIT)', icon: null },
  { id: 'running', label: 'Running', icon: null },
  { id: 'swimming', label: 'Swimming', icon: null },
  { id: 'cycling', label: 'Cycling', icon: null },
  { id: 'other', label: 'Other', icon: null },
]

export const equipmentOptions = [
  { id: 'homeGym', label: 'Home Gym', icon: null },
  { id: 'gymMembership', label: 'Gym Membership', icon: null },
  { id: 'minimal', label: 'Minimal / No Equipment', icon: null },
]

export const locationOptions = [
  { id: 'home', label: 'Home', icon: null },
  { id: 'commercialGym', label: 'Commercial Gym', icon: null },
  { id: 'outdoors', label: 'Outdoors (Park, Street, etc.)', icon: null },
  { id: 'communityCenter', label: 'Community Center / Pool', icon: null },
  { id: 'office', label: 'Office / Workplace', icon: null },
  { id: 'other', label: 'Other', icon: null },
]

export const fitnessDeviceOptions = [
  { id: 'smartwatch', label: 'Smartwatch', icon: null },
  { id: 'fitnessTracker', label: 'Fitness Tracker', icon: null },
  { id: 'heartRateMonitor', label: 'Heart Rate Monitor', icon: null },
  { id: 'none', label: 'None', icon: null },
]

export const notificationOptions = [
  { id: 'workoutReminders', label: 'Workout Reminders', icon: null },
  { id: 'nutritionalGuidance', label: 'Nutritional Guidance', icon: null },
  { id: 'progressTracking', label: 'Progress Tracking', icon: null },
  { id: 'motivationalMessages', label: 'Motivational Messages', icon: null },
]

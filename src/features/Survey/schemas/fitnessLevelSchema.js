import * as Yup from 'yup'

export const fitnessLevelSchema = Yup.object({
  experienceLevel: Yup.string().required('Please select your experience level'),
  workoutFrequency: Yup.string().required(
    'Please select your workout frequency'
  ),
  workoutDuration: Yup.string().required(
    'Please select your average workout duration'
  ),
  exerciseTypes: Yup.array()
    .min(1, 'Please select at least one exercise type')
    .required('Please select at least one exercise type'),
  otherExerciseType: Yup.string().when('exerciseTypes', {
    is: (val) => val && val.includes('other'),
    then: Yup.string().required('Please specify your other exercise type'),
  }),
})

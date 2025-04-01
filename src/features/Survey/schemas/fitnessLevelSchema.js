import * as Yup from 'yup'

const FitnessLevelSchema = Yup.object().shape({
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
    is: (exerciseTypes) =>
      Array.isArray(exerciseTypes) && exerciseTypes.includes('Other'),
    then: () =>
      Yup.string().required('Please specify your other exercise type'),
    otherwise: () => Yup.string().notRequired(),
  }),
})

export default FitnessLevelSchema

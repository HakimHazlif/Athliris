import * as Yup from 'yup'

const FitnessGoalsSchema = Yup.object({
  primaryObjective: Yup.string().required('Please select a primary objective'),
  targetWeight: Yup.number().when('primaryObjective', {
    is: (val) => val === 'weightLoss' || val === 'muscleGain',
    then: () =>
      Yup.number()
        .positive('Target weight must be a positive number')
        .required('Please enter your target weight'),
    otherwise: () => Yup.string().nullable().notRequired(),
  }),

  desiredWeightChange: Yup.number().when('primaryObjective', {
    is: (val) => val === 'weightLoss' || val === 'muscleGain',
    then: () =>
      Yup.number().required('Please enter your desired weight change'),
    otherwise: () => Yup.number().nullable().notRequired(),
  }),
  targetBodyFat: Yup.number()
    .min(3, 'Body fat percentage must be at least 3%')
    .max(50, 'Body fat percentage must be at most 50%')
    .nullable(true),
  desiredMuscleIncrease: Yup.number()
    .when('primaryObjective', {
      is: 'muscleGain',
      then: () =>
        Yup.number().positive(
          'Desired muscle increase must be a positive number'
        ),
      otherwise: () => Yup.number().nullable().notRequired(),
    })
    .nullable(true),
})

export default FitnessGoalsSchema

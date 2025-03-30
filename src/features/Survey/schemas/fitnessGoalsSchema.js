import * as Yup from 'yup'

export const fitnessGoalsSchema = Yup.object({
  primaryObjective: Yup.string().required('Please select a primary objective'),
  targetWeight: Yup.number().when('primaryObjective', {
    is: (val) => val === 'weightLoss' || val === 'muscleGain',
    then: () =>
      Yup.number()
        .positive('Target weight must be a positive number')
        .required('Please enter your target weight'),
    otherwise: () => Yup.number().notRequired(),
  }),
  weightUnit: Yup.string().when('targetWeight', {
    is: (val) => val && val > 0,
    then: () => Yup.string().required('Please select a weight unit'),
    otherwise: () => Yup.string().notRequired(),
  }),
  desiredWeightChange: Yup.number().when('primaryObjective', {
    is: (val) => val === 'weightLoss' || val === 'muscleGain',
    then: () =>
      Yup.number().required('Please enter your desired weight change'),
    otherwise: () => Yup.number().notRequired(),
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
      otherwise: () => Yup.number().notRequired(),
    })
    .nullable(true),
  shortTermGoals: Yup.string().required('Please enter your short-term goals'),
  longTermGoals: Yup.string().required('Please enter your long-term goals'),
  performanceTargets: Yup.string().when('primaryObjective', {
    is: 'athleticPerformance',
    then: () =>
      Yup.string().required('Please enter your specific performance targets'),
    otherwise: () => Yup.string().notRequired(),
  }),
})

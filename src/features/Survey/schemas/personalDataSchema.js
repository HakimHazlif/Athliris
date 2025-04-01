import * as Yup from 'yup'

export const getPersonalDataSchema = (unit = 'metric') => {
  return Yup.object().shape({
    birthDate: Yup.date()
      .required('Date of birth required')
      .max(new Date(), 'Invalid date of birth')
      .test('age', 'You must be at least 18 years old', function (value) {
        const cutoff = new Date()
        cutoff.setFullYear(cutoff.getFullYear() - 18)
        return value <= cutoff
      }),

    gender: Yup.string()
      .required('Please select gender')
      .oneOf(['male', 'female', 'other'], 'Incorrect gender selection'),

    height:
      unit === 'metric'
        ? Yup.number()
            .required('Height required')
            .positive('Length must be a positive number')
            .min(50, 'Length must be greater than 50 cm')
            .max(250, 'Height must be less than 250 cm')
        : Yup.number()
            .required('Height required')
            .positive('Length must be a positive number')
            .min(19.7, 'Length must be greater than 19.7 inches')
            .max(98.4, 'Height must be less than 98.4 inches'),

    weight:
      unit === 'metric'
        ? Yup.number()
            .required('Weight required')
            .positive('Weight must be a positive number')
            .min(20, 'Weight must be greater than 20 kg')
            .max(300, 'Weight must be less than 300 kg')
        : Yup.number()
            .required('Weight required')
            .positive('Weight must be a positive number')
            .min(44, 'Weight must be greater than 44 lb')
            .max(661.3, 'Weight must be less than 661.3 lb'),

    activityLevel: Yup.string()
      .required('Activity level required')
      .oneOf(
        [
          'Sedentary (less than 30 minutes per day)',
          'Lightly active (30-60 minutes daily)',
          'Moderately active (60-90 minutes daily)',
          'Very active (more than 90 minutes daily)',
        ],
        'Invalid activity level selected'
      ),
  })
}

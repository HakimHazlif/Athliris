import * as Yup from 'yup'

const DietaryPreferencesSchema = Yup.object({
  dietType: Yup.string().required('Please select your current diet type'),
  otherDietType: Yup.string().when('dietType', {
    is: 'Other',
    then: () => Yup.string().required('Please specify your diet type'),
    otherwise: () => Yup.string().notRequired(),
  }),
  restrictions: Yup.array().min(
    1,
    'Please select at least one option or "None"'
  ),
  otherRestriction: Yup.string().when('restrictions', {
    is: (val) => val && val.includes('Other'),
    then: () =>
      Yup.string().required('Please specify your other medical condition'),
    otherwise: () => Yup.string().notRequired(),
  }),
  trackingPreferences: Yup.array().min(
    1,
    'Please select at least one tracking preference'
  ),
})

export default DietaryPreferencesSchema

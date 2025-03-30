import * as Yup from 'yup'

export const dietaryPreferencesSchema = Yup.object({
  dietType: Yup.string().required('Please select your current diet type'),
  otherDietType: Yup.string().when('dietType', {
    is: 'other',
    then: Yup.string().required('Please specify your diet type'),
  }),
  restrictions: Yup.object().test(
    'at-least-one-restriction',
    'Please select at least one option or select "None"',
    function (value) {
      // If "None" is selected, or at least one restriction is true
      if (!value) return false
      return Object.values(value).some((v) => v === true)
    }
  ),
  otherRestriction: Yup.string().when('restrictions.other', {
    is: true,
    then: Yup.string().required('Please specify your dietary restriction'),
  }),
  trackingPreferences: Yup.object().test(
    'at-least-one-preference',
    'Please select at least one tracking preference',
    function (value) {
      if (!value) return false
      return Object.values(value).some((v) => v === true)
    }
  ),
})

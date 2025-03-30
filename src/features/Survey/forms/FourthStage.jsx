import { useDispatch, useSelector } from 'react-redux'
import {
  getNextStage,
  healthFitnessUser,
  setDietaryPreferences,
} from '../../../app/slices/userDataSlice'
import { dietaryPreferencesSchema } from '../schemas/dietaryPreferencesSchema'
import RadioboxInput from '../../../components/ui/RadioboxInput'
import {
  dietaryRestrictions,
  dietTypes,
  trackingPreferences,
} from '../utils/constant'
import { Form, Formik } from 'formik'
import InputField from '../../../components/ui/InputField'
import CheckboxInput from '../../../components/ui/CheckboxInput'
import FormActions from '../components/FormActions'

const FourthStage = () => {
  const dispatch = useDispatch()
  const userData = useSelector(healthFitnessUser)

  return (
    <Formik
      initialValues={userData.dietaryPreferences}
      validationSchema={dietaryPreferencesSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('start')
        dispatch(setDietaryPreferences(values))
        dispatch(getNextStage())
        setSubmitting(false)
      }}
    >
      {({ values }) => {
        return (
          <Form className="space-y-6">
            <RadioboxInput
              label="Current Diet Type"
              id="dietType"
              options={dietTypes}
            />

            {values.dietType === 'other' && (
              <InputField
                label="Please specify your diet type"
                id="otherDietType"
                type="text"
                placeholder="Your Diet Type..."
              />
            )}

            <CheckboxInput
              label="Dietary Restrictions/Allergies"
              id="restrictions"
              options={dietaryRestrictions}
            />

            {values.restrictions.includes('other') && (
              <InputField
                label="Please specify your dietary restriction or allergy"
                id="otherRestriction"
                type="text"
                placeholder="Your Dietary Restriction"
              />
            )}

            <CheckboxInput
              label="Nutritional Tracking Preferences"
              id="trackingPreferences"
              options={trackingPreferences}
            />

            <FormActions />
          </Form>
        )
      }}
    </Formik>
  )
}

export default FourthStage

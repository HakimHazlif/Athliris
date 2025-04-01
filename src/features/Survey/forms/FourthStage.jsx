import { useDispatch, useSelector } from 'react-redux'
import {
  getNextStage,
  healthFitnessUser,
  setDietaryPreferences,
} from '../../../app/slices/userDataSlice'
import DietaryPreferencesSchema from '../schemas/dietaryPreferencesSchema'
import RadioBoxGroup from '../../../components/ui/RadioBoxGroup'
import {
  dietaryRestrictions,
  dietTypes,
  trackingPreferences,
} from '../utils/constant'
import { Form, Formik } from 'formik'
import InputField from '../../../components/ui/InputField'
import CheckboxGroup from '../../../components/ui/CheckboxGroup'
import FormActions from '../components/FormActions'
import SelectInput from '../../../components/ui/SelectInput'

const FourthStage = () => {
  const dispatch = useDispatch()
  const { dietaryPreferences } = useSelector(healthFitnessUser)

  return (
    <Formik
      initialValues={dietaryPreferences}
      validationSchema={DietaryPreferencesSchema}
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
            <SelectInput
              label="Current Diet Type"
              id="dietType"
              options={dietTypes}
              defaultOption="Choose Your Current Diet"
            />

            {values.dietType === 'Other' && (
              <InputField
                label="Please specify your diet type"
                id="otherDietType"
                type="text"
                placeholder="Your Diet Type..."
              />
            )}

            <CheckboxGroup
              label="Dietary Restrictions/Allergies"
              id="restrictions"
              options={dietaryRestrictions}
            />

            {values?.restrictions.includes('Other') && (
              <InputField
                label="Please specify your dietary restriction or allergy"
                id="otherRestriction"
                type="text"
                placeholder="Your Dietary Restriction"
              />
            )}

            <CheckboxGroup
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

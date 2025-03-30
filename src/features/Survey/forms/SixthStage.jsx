import { useDispatch, useSelector } from 'react-redux'
import {
  getNextStage,
  healthFitnessUser,
  setAvailableEquipment,
} from '../../../app/slices/userDataSlice'
import { availableEquipmentSchema } from '../schemas/availableEquipmentSchema'
import FormActions from '../components/FormActions'
import { Form, Formik } from 'formik'
import RadioboxInput from '../../../components/ui/RadioboxInput'
import { equipmentOptions, locationOptions } from '../utils/constant'
import CheckboxInput from '../../../components/ui/CheckboxInput'
import InputField from '../../../components/ui/InputField'

const SixthStage = () => {
  const dispatch = useDispatch()
  const userData = useSelector(healthFitnessUser)

  return (
    <Formik
      initialValues={userData.fitnessLevel}
      validationSchema={availableEquipmentSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('start')
        dispatch(setAvailableEquipment(values))
        dispatch(getNextStage())
        setSubmitting(false)
      }}
    >
      {({ values }) => {
        return (
          <Form className="space-y-6">
            <RadioboxInput
              label="Available Exercise Equipment"
              id="availableEquipment"
              options={equipmentOptions}
            />

            <CheckboxInput
              label="Preferred Exercise Locations"
              id="exerciseLocations"
              options={locationOptions}
            />

            {values.exerciseLocations &&
              values.exerciseLocations.includes('other') && (
                <InputField
                  label="Please specify your other exercise location"
                  id="otherLocation"
                  type="text"
                  placeholder="Your Exercise Location"
                />
              )}

            <FormActions />
          </Form>
        )
      }}
    </Formik>
  )
}

export default SixthStage

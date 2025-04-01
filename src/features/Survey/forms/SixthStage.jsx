import { useDispatch, useSelector } from 'react-redux'
import {
  getNextStage,
  healthFitnessUser,
  setAvailableEquipment,
} from '../../../app/slices/userDataSlice'
import AvailableEquipmentSchema from '../schemas/availableEquipmentSchema'
import FormActions from '../components/FormActions'
import { Form, Formik } from 'formik'
import RadioBoxGroup from '../../../components/ui/RadioBoxGroup'
import { equipmentOptions, locationOptions } from '../utils/constant'
import CheckboxGroup from '../../../components/ui/CheckboxGroup'
import InputField from '../../../components/ui/InputField'

const SixthStage = () => {
  const dispatch = useDispatch()
  const { availableEquipment } = useSelector(healthFitnessUser)

  return (
    <Formik
      initialValues={availableEquipment}
      validationSchema={AvailableEquipmentSchema}
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
            <RadioBoxGroup
              label="Available Exercise Equipment"
              id="availableEquipment"
              options={equipmentOptions}
            />

            <CheckboxGroup
              label="Preferred Exercise Locations"
              id="exerciseLocations"
              options={locationOptions}
            />

            {values.exerciseLocations &&
              values.exerciseLocations.includes('Other') && (
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

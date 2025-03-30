import { Form, Formik } from 'formik'
import { technologyTrackingSchema } from '../schemas/technologyTrackingSchema'
import { useDispatch, useSelector } from 'react-redux'
import {
  getNextStage,
  healthFitnessUser,
  setTechnologyTracking,
} from '../../../app/slices/userDataSlice'
import FormActions from '../components/FormActions'
import CheckboxInput from '../../../components/ui/CheckboxInput'
import { fitnessDeviceOptions, notificationOptions } from '../utils/constant'

const SeventhStage = () => {
  const dispatch = useDispatch()
  const userData = useSelector(healthFitnessUser)

  return (
    <Formik
      initialValues={userData.technologyTracking}
      validationSchema={technologyTrackingSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('start')
        dispatch(setTechnologyTracking(values))
        dispatch(getNextStage())
        setSubmitting(false)
      }}
    >
      {() => {
        return (
          <Form className="space-y-6">
            <CheckboxInput
              label="Existing Fitness Devices"
              id="fitnessDevices"
              options={fitnessDeviceOptions}
            />

            <CheckboxInput
              label="Preferred Notification Types"
              id="notificationTypes"
              options={notificationOptions}
            />

            <div className="mt-4 p-4 rounded-md">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-200 mb-2">
                Note:
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Technology can enhance your fitness journey through tracking,
                reminders, and motivation. We'll customize your experience based
                on the devices you use and notification preferences.
              </p>
            </div>

            <FormActions />
          </Form>
        )
      }}
    </Formik>
  )
}

export default SeventhStage

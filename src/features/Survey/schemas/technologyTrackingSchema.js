import * as Yup from 'yup'

const TechnologyTrackingSchema = Yup.object({
  fitnessDevices: Yup.array()
    .min(1, 'Please select at least one option')
    .required('Please select at least one option'),
  notificationTypes: Yup.array()
    .min(1, 'Please select at least one notification type')
    .required('Please select at least one notification type'),
})

export default TechnologyTrackingSchema

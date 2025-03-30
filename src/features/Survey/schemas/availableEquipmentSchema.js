import * as Yup from 'yup'

export const availableEquipmentSchema = Yup.object({
  availableEquipment: Yup.string().required(
    'Please select your available equipment'
  ),
  exerciseLocations: Yup.array()
    .min(1, 'Please select at least one exercise location')
    .required('Please select at least one exercise location'),
  otherLocation: Yup.string().when(['exerciseLocations'], {
    is: (exerciseLocations) =>
      exerciseLocations && exerciseLocations.includes('other'),
    then: () =>
      Yup.string().required('Please specify your other exercise location'),
    otherwise: () => Yup.string(),
  }),
})

import * as Yup from 'yup'

const AvailableEquipmentSchema = Yup.object().shape({
  availableEquipment: Yup.string().required(
    'Please select your available equipment'
  ),
  exerciseLocations: Yup.array()
    .min(1, 'Please select at least one exercise location')
    .required('Please select at least one exercise location'),
  otherLocation: Yup.string().when('exerciseLocations', {
    is: (exerciseLocations) =>
      Array.isArray(exerciseLocations) && exerciseLocations.includes('Other'),
    then: () =>
      Yup.string().required('Please specify your other exercise location'),
    otherwise: () => Yup.string().notRequired(),
  }),
})

export default AvailableEquipmentSchema

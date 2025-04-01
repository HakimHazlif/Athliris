import * as Yup from 'yup'

const MedicalHistorySchema = Yup.object().shape({
  conditions: Yup.array().min(1, 'Please select at least one option or "None"'),
  otherCondition: Yup.string().when('medicalConditions', {
    is: (medicalConditions) =>
      medicalConditions && medicalConditions.includes('Other'),
    then: Yup.string().required('Please specify your other medical condition'),
  }),
  physicalLimitations: Yup.string(),
  injuries: Yup.string(),
  medications: Yup.string(),
  allergies: Yup.string(),
})

export default MedicalHistorySchema

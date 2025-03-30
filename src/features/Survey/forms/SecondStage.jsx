import { useDispatch, useSelector } from 'react-redux'
import { MedicalHistorySchema } from '../schemas/medicalHistorySchema'
import { medicalConditions } from '../utils/constant'
import CheckboxInput from '../../../components/ui/CheckboxInput'
import InputField from '../../../components/ui/InputField'
import TextareaInput from '../../../components/ui/TextareaInput'
import FormActions from '../components/FormActions'
import { Form, Formik } from 'formik'
import {
  getNextStage,
  healthFitnessUser,
  setMedicalHistory,
} from '../../../app/slices/userDataSlice'

const SecondStage = () => {
  const dispatch = useDispatch()
  // const { stage } = useSelector((state) => state.userData)
  const userData = useSelector(healthFitnessUser)

  console.log(userData)
  return (
    <Formik
      initialValues={userData.medicalHistory}
      validationSchema={MedicalHistorySchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(setMedicalHistory(values))
        dispatch(getNextStage())
        setSubmitting(false)
      }}
    >
      {({ values }) => {
        return (
          <Form className="space-y-6">
            <CheckboxInput
              id="conditions"
              label="Medical Conditions"
              options={medicalConditions}
            />

            {values?.conditions?.includes('other') && (
              <InputField
                id="otherCondition"
                label="Please specify your other medical condition"
                type="text"
              />
            )}

            <div className="relative flex items-center justify-center my-4">
              <hr className="w-full border-t border-gray-300 dark:border-gray-600" />
              <span className="absolute bg-white dark:bg-grayish-700 text-gray-500 text-sm px-3">
                Optionals
              </span>
            </div>

            <TextareaInput
              id="physicalLimitations"
              label="Physical Limitations"
              placeholder="Describe any physical limitations you have"
            />
            <TextareaInput
              id="injuries"
              label="Past Sports or Exercise-Related Injuries"
              placeholder="Describe any past injuries that might affect your exercise routine"
            />
            <TextareaInput
              id="medications"
              label="Current Medications Affecting Physical Activity"
              placeholder="List any medications that might affect your exercise routine"
            />
            <TextareaInput
              id="allergies"
              label="Allergies & Special Health Considerations"
              placeholder="List any allergies or other health considerations we should know about"
            />

            <FormActions />
          </Form>
        )
      }}
    </Formik>
  )
}

export default SecondStage

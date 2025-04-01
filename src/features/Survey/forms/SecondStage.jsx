import { useDispatch, useSelector } from 'react-redux'
import MedicalHistorySchema from '../schemas/medicalHistorySchema'
import { medicalConditions, medicalHistories } from '../utils/constant'
import CheckboxGroup from '../../../components/ui/CheckboxGroup'
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
  const { medicalHistory } = useSelector(healthFitnessUser)

  return (
    <Formik
      initialValues={medicalHistory}
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
            <CheckboxGroup
              id="conditions"
              label="Medical Conditions"
              options={medicalConditions}
            />

            {values?.conditions?.includes('Other') && (
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

            {medicalHistories.map((el) => (
              <TextareaInput
                key={el.id}
                id={el.id}
                label={el.label}
                placeholder={el.placeholder}
              />
            ))}

            <FormActions />
          </Form>
        )
      }}
    </Formik>
  )
}

export default SecondStage

import { useDispatch, useSelector } from 'react-redux'
import {
  getNextStage,
  healthFitnessUser,
  setFitnessLevel,
} from '../../../app/slices/userDataSlice'
import { Form, Formik } from 'formik'
import { fitnessLevelSchema } from '../schemas/fitnessLevelSchema'
import RadioboxInput from '../../../components/ui/RadioboxInput'
import {
  durationOptions,
  exerciseTypes,
  experienceLevels,
  frequencyOptions,
} from '../utils/constant'
import FormActions from '../components/FormActions'
import SelectInput from '../../../components/ui/SelectInput'
import CheckboxInput from '../../../components/ui/CheckboxInput'
import InputField from '../../../components/ui/InputField'

const FifthStage = () => {
  const dispatch = useDispatch()
  const userData = useSelector(healthFitnessUser)

  console.log(userData)
  return (
    <Formik
      initialValues={userData.fitnessLevel}
      validationSchema={fitnessLevelSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('start')
        dispatch(setFitnessLevel(values))
        dispatch(getNextStage())
        setSubmitting(false)
      }}
    >
      {({ values }) => {
        return (
          <Form className="space-y-6">
            <RadioboxInput
              label="Exercise Experience"
              id="experienceLevel"
              options={experienceLevels}
            />

            <SelectInput
              label="Frequency of Workouts (per week)"
              id="workoutFrequency"
              options={frequencyOptions}
              defaultOption="Choose your workout frequency"
            />

            <SelectInput
              label="Average Workout Duration"
              id="workoutDuration"
              options={durationOptions}
              defaultOption="Choose your workout duration"
            />

            <CheckboxInput
              label="Preferred Exercise Types (Select all that apply)"
              id="exerciseTypes"
              options={exerciseTypes}
            />

            {values.exerciseTypes.includes('other') && (
              <InputField
                label="Please specify your other exercise type"
                id="otherExerciseType"
                type="text"
                placeholder="Your Other Exercise Type..."
              />
            )}

            <FormActions />
          </Form>
        )
      }}
    </Formik>
  )
}

export default FifthStage

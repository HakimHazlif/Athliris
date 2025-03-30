import { useDispatch, useSelector } from 'react-redux'
import { fitnessGoalsSchema } from '../schemas/fitnessGoalsSchema'
import {
  getNextStage,
  healthFitnessUser,
  setFitnessGoals,
} from '../../../app/slices/userDataSlice'
import { Form, Formik } from 'formik'
import { fieldIconStyle, fitnessObjectives } from '../utils/constant'
import InputField from '../../../components/ui/InputField'
import { useState } from 'react'
import RadioboxInput from '../../../components/ui/RadioboxInput'
import FormActions from '../components/FormActions'
import SwitchUnit from '../../../components/ui/SwitchUnit'

const ThirdStage = () => {
  const dispatch = useDispatch()
  const userData = useSelector(healthFitnessUser)
  const [unit, setUnit] = useState('metric')

  const icon = unit === 'metric' ? 'kg' : 'lbs'

  console.log(userData)

  return (
    <Formik
      initialValues={userData.fitnessGoals}
      validationSchema={fitnessGoalsSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('start')
        dispatch(setFitnessGoals(values))
        dispatch(getNextStage())
        setSubmitting(false)
      }}
    >
      {({ values }) => {
        return (
          <Form className="space-y-6">
            <RadioboxInput
              id="primaryObjective"
              label="Primary Fitness Objective"
              options={fitnessObjectives}
            />

            <div className="pt-3 flex justify-between items-center">
              <h3 className="">Specific Numerical Goals</h3>

              <SwitchUnit label="Weight Unite" unit={unit} setUnit={setUnit} />
            </div>

            {(values.primaryObjective === 'weightLoss' ||
              values.primaryObjective === 'muscleGain') && (
              <InputField
                label="Target Weight"
                id="targetWeight"
                type="number"
                icon={
                  <div className={`${fieldIconStyle} font-bold`}>{icon}</div>
                }
                placeholder="Your Target Weight..."
              />
            )}

            {(values.primaryObjective === 'weightLoss' ||
              values.primaryObjective === 'muscleGain') && (
              <InputField
                label={
                  values.primaryObjective === 'weightLoss'
                    ? 'Desired Weight Loss'
                    : 'Desired Weight Gain'
                }
                id="desiredWeightChange"
                type="number"
                icon={
                  <div className={`${fieldIconStyle} font-bold`}>{icon}</div>
                }
                placeholder="Your Target Weight..."
              />
            )}

            <InputField
              label="Target Body Fat Percentage (%)"
              id="targetBodyFat"
              type="number"
              icon={<div className={`${fieldIconStyle} font-extrabold`}>%</div>}
              placeholder="Your Target Fat..."
            />

            {values.primaryObjective === 'muscleGain' && (
              <InputField
                label="Desired Muscle Mass Increase"
                id="desiredMuscleIncrease"
                type="number"
                icon={
                  <div className={`${fieldIconStyle} font-bold`}>{icon}</div>
                }
                placeholder="Your Target Weight..."
              />
            )}

            <FormActions />
          </Form>
        )
      }}
    </Formik>
  )
}

export default ThirdStage

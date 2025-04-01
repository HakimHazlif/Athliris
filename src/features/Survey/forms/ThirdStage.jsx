import { useDispatch, useSelector } from 'react-redux'
import FitnessGoalsSchema from '../schemas/fitnessGoalsSchema'
import {
  getNextStage,
  healthFitnessUser,
  setFitnessGoals,
} from '../../../app/slices/userDataSlice'
import { Form, Formik } from 'formik'
import { fieldIconStyle, fitnessObjectives } from '../utils/constant'
import InputField from '../../../components/ui/InputField'
import FormActions from '../components/FormActions'
import SwitchUnit from '../../../components/ui/SwitchUnit'
import RadioBoxGroup from '../../../components/ui/RadioBoxGroup'

const ThirdStage = () => {
  const dispatch = useDispatch()
  const { fitnessGoals, unit } = useSelector(healthFitnessUser)

  const icon = unit === 'metric' ? 'kg' : 'lbs'

  return (
    <Formik
      initialValues={fitnessGoals}
      validationSchema={FitnessGoalsSchema}
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
            <RadioBoxGroup
              id="primaryObjective"
              label="Primary Fitness Objective"
              options={fitnessObjectives}
            />

            <div className="pt-3 flex justify-between items-center">
              <h3 className="">Specific Numerical Goals</h3>

              <SwitchUnit label="Weight Unite" />
            </div>

            {(values.primaryObjective === 'Weight Loss' ||
              values.primaryObjective === 'Muscle Gain') && (
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

            {(values.primaryObjective === 'Weight Loss' ||
              values.primaryObjective === 'Muscle Gain') && (
              <InputField
                label={
                  values.primaryObjective === 'Weight Loss'
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

            {values.primaryObjective === 'Muscle Gain' && (
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

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activityLevels, fieldIconStyle } from '../utils/constant'
import { getPersonalDataSchema } from '../schemas/personalDataSchema'
import { Form, Formik } from 'formik'
import InputField from '../../../components/ui/InputField'
import RadioInput from '../../../components/ui/RadioInput'
import SelectInput from '../../../components/ui/SelectInput'

import { LiaBirthdayCakeSolid } from 'react-icons/lia'
import { FaRegUser } from 'react-icons/fa'
import FormActions from '../components/FormActions'
import {
  getNextStage,
  healthFitnessUser,
  setPersonalData,
} from '../../../app/slices/userDataSlice'
import SwitchUnit from '../../../components/ui/SwitchUnit'

const FirstStage = () => {
  const dispatch = useDispatch()
  // const { stage } = useSelector((state) => state.userData)
  const userData = useSelector(healthFitnessUser)
  const [unit, setUnit] = useState('metric')

  // console.log(userData, stage)

  return (
    <Formik
      initialValues={userData.personalData}
      validationSchema={getPersonalDataSchema(unit)}
      onSubmit={(values, { setSubmitting }) => {
        console.log('start')
        dispatch(setPersonalData(values))
        dispatch(getNextStage())
        setSubmitting(false)
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form className="space-y-6">
            <InputField
              id="fullName"
              label="Full Name"
              icon={<FaRegUser className={fieldIconStyle} />}
              type="text"
              placeholder="Your Full Name..."
              error={errors.fullName}
              touched={touched.fullName}
            />
            <InputField
              id="birthDate"
              label="Date of Birth"
              icon={<LiaBirthdayCakeSolid className={fieldIconStyle} />}
              type="date"
              placeholder="Your Birthday..."
              error={errors.birthDate}
              touched={touched.birthDate}
            />

            <RadioInput
              id="gender"
              label="Gender"
              options={['male', 'female', 'other']}
            />

            <div className="space-y-2">
              <SwitchUnit label="Measurements" unit={unit} setUnit={setUnit} />

              <div className="flex gap-2">
                <InputField
                  id="height"
                  label="Height"
                  icon={
                    <div className={`${fieldIconStyle} font-extrabold`}>
                      {unit === 'metric' ? 'cm' : 'in'}
                    </div>
                  }
                  type="number"
                  placeholder="Your Height..."
                  error={errors.height}
                  touched={touched.height}
                />
                <InputField
                  id="weight"
                  label="Weight"
                  icon={
                    <div className={`${fieldIconStyle} font-extrabold`}>
                      {unit === 'metric' ? 'kg' : 'lbs'}
                    </div>
                  }
                  type="number"
                  placeholder="Your Weight..."
                  error={errors.weight}
                  touched={touched.weight}
                />
              </div>
            </div>

            <SelectInput
              id="activityLevel"
              label="Activity Level"
              options={activityLevels}
              defaultOption="Choose your activity level"
            />

            <FormActions />
          </Form>
        )
      }}
    </Formik>
  )
}

export default FirstStage

import { Form, Formik } from 'formik'
import ConfirmationSchema from '../schemas/confirmationSchema'
import FormActions from '../components/FormActions'

import CheckboxInputMini from '../../../components/ui/CheckboxInputMini'
import { useDispatch, useSelector } from 'react-redux'
import {
  healthFitnessUser,
  setUserAgreements,
} from '../../../app/slices/userDataSlice'
import { createFitnessProfile } from '../service/apiUserData'
import { user } from '../../../app/slices/authSlice'
import { useNavigate } from 'react-router-dom'

const ConfirmationForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector(healthFitnessUser)
  const { uid, username } = useSelector(user)

  // console.log(userData)

  return (
    <Formik
      initialValues={userData.userAgreements}
      validationSchema={ConfirmationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          dispatch(setUserAgreements(values))
          await dispatch(
            createFitnessProfile({ userId: uid, surveyData: userData })
          )
        } catch (error) {
          throw new Error(error)
        } finally {
          setSubmitting(false)
          navigate(`/user/${username.replace(' ', '-')}/workouts`)
        }
      }}
    >
      {() => {
        return (
          <Form className="space-y-4">
            <CheckboxInputMini
              id="termsOfServiceAgreement"
              label={
                <span>
                  I agree to the{' '}
                  <a
                    className="text-neon-600 hover:text-neon-800 underline"
                    href="/terms-of-service"
                    target="_blank"
                  >
                    Terms of Service
                  </a>
                </span>
              }
            />

            <CheckboxInputMini
              id="privacyPolicyAgreement"
              label={
                <span>
                  I agree to the{' '}
                  <a
                    className="text-neon-600 hover:text-neon-800 underline"
                    href="/privacy-policy"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </span>
              }
            />

            <CheckboxInputMini
              id="dataConsentAgreement"
              label="I consent to the collection, processing, and storage of my fitness data for the purpose of providing personalized fitness recommendations."
            />

            <div className="p-4 mb-6">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Data Protection Summary:
              </h4>
              <ul className="text-sm dark:text-gray-400 text-gray-600 space-y-2 list-disc list-inside">
                <li>Your information is securely stored and encrypted</li>
                <li>
                  We do not share your personal data with third parties without
                  your explicit consent
                </li>
                <li>
                  You can request access to or deletion of your data at any time
                </li>
                <li>
                  We use your data solely to provide personalized fitness
                  recommendations
                </li>
                <li>You can opt out of communications at any time</li>
              </ul>
            </div>

            <FormActions />
          </Form>
        )
      }}
    </Formik>
  )
}

export default ConfirmationForm

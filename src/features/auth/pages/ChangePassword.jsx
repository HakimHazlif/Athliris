import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import InputField from '../../../components/ui/InputField'
import { MdAlternateEmail, MdOutlineLockOpen } from 'react-icons/md'
import SubmitionButton from '../../../components/SubmitionButton'
import SpinnerMini from '../../../components/ui/SpinnerMini'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { resetPassword } from '../service/apiAuth'

const SendResetSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
})
const ChangePassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.userAuth)
  const [searchParams] = useSearchParams()

  const oobCode = searchParams.get('oobCode')

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  useEffect(() => {
    console.log(status)
    if (status === 'password resetted') navigate('/login')
  }, [navigate, status])

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-4xl font-extrabold leading-relaxed text-grayish-200">
          Change Your <span className="text-neon-500">Password</span>
        </h2>
        <p className="mt-2 text-center text-sm text-grayish-300">
          Enter a new password below to change your password
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            validationSchema={SendResetSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(resetPassword({ oobCode, newPassword: values.password }))
              setSubmitting(false)
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-6">
                <InputField
                  id="password"
                  label="Password"
                  icon={<MdOutlineLockOpen className="h-5 w-5 text-gray-400" />}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Your Password..."
                  error={errors.password}
                  touched={touched.password}
                  forPassword={true}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
                <InputField
                  id="confirmPassword"
                  label="Confirm Your Password"
                  icon={<MdOutlineLockOpen className="h-5 w-5 text-gray-400" />}
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password..."
                  error={errors.confirmPassword}
                  touched={touched.confirmPassword}
                  forPassword={true}
                  showPassword={showConfirmPassword}
                  setShowPassword={setShowConfirmPassword}
                />
                <div>
                  <SubmitionButton isSubmitting={isSubmitting}>
                    {status === 'loading' ? <SpinnerMini /> : 'Reset Password'}
                  </SubmitionButton>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default ChangePassword

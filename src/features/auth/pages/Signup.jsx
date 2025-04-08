import { useEffect, useState } from 'react'

import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { FaRegUser } from 'react-icons/fa'
import { MdAlternateEmail, MdOutlineLockOpen } from 'react-icons/md'

import InputField from '../../../components/ui/InputField'
import SpinnerMini from '../../../components/ui/SpinnerMini'
import SubmitionButton from '../../../components/SubmitionButton'
import AuthHeader from '../components/AuthHeader'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../service/apiAuth'
import { useNavigate } from 'react-router-dom'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name is too short')
    .max(50, 'First name is too long')
    .required('First name is required'),
  lastName: Yup.string()
    .min(2, 'Last name is too short')
    .max(50, 'Last name is too long')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
})

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { status, isLoggedIn } = useSelector((state) => state.userAuth)

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  useEffect(() => {
    if (isLoggedIn) navigate('/health-fitness-survey', { replace: true })
  }, [isLoggedIn, navigate])

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-grayish-800 main-bg flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <AuthHeader isLogin={false} />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-grayish-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(signup(values))
              setSubmitting(false)
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <InputField
                    id="firstName"
                    label="First Name"
                    icon={<FaRegUser className="h-5 w-5 text-gray-400" />}
                    type="text"
                    placeholder="Your First Name..."
                    error={errors.firstName}
                    touched={touched.firstName}
                  />
                  <InputField
                    id="lastName"
                    label="Last Name"
                    icon={<FaRegUser className="h-5 w-5 text-gray-400" />}
                    type="text"
                    placeholder="Your Last Name..."
                    error={errors.lastName}
                    touched={touched.lastName}
                  />
                </div>
                <InputField
                  id="email"
                  label="Email Address"
                  icon={<MdAlternateEmail className="h-5 w-5 text-gray-400" />}
                  type="email"
                  placeholder="Your Email..."
                  error={errors.email}
                  touched={touched.email}
                />
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
                    {status === 'loading' ? <SpinnerMini /> : 'Sign up'}
                  </SubmitionButton>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Signup

import { useEffect, useState } from 'react'

import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { FaRegUser } from 'react-icons/fa'
import { MdAlternateEmail, MdOutlineLockOpen } from 'react-icons/md'

import InputField from '../components/InputField'
import SpinnerMini from '../../../components/SpinnerMini'
import SubmitionButton from '../../../components/SubmitionButton'
import AuthHeader from '../components/AuthHeader'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../api/apiAuth'
import { useNavigate } from 'react-router-dom'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
})

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { status, user, isLoggedIn } = useSelector((state) => state.user)

  const [showPassword, setShowPassword] = useState(false)

  console.log(user)

  useEffect(() => {
    if (isLoggedIn) navigate('/', { replace: true })
  }, [isLoggedIn, navigate])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <AuthHeader isLogin={true} />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(login(values))
              setSubmitting(false)
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-6">
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

                <div>
                  <SubmitionButton isSubmitting={isSubmitting}>
                    {status === 'loading' ? <SpinnerMini /> : 'Sign in'}
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

export default Login

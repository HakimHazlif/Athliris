import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import InputField from './InputField'
import { MdAlternateEmail } from 'react-icons/md'
import SubmitionButton from '../../../components/SubmitionButton'
import SpinnerMini from '../../../components/SpinnerMini'
import { sendResetEmail } from '../service/apiAuth'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

const SendResetSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
})

const SendResetForm = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.userAuth)

  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={SendResetSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(sendResetEmail(values.email))
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
                <div>
                  <SubmitionButton isSubmitting={isSubmitting}>
                    {status === 'loading' ? <SpinnerMini /> : 'Reset Password'}
                  </SubmitionButton>
                </div>
              </Form>
            )}
          </Formik>
          <div className="flex justify-center mt-4">
            <Link
              to="/login"
              className="text-sm text-grayish-400 hover:text-grayish-500 text-center flex gap-2 items-center"
            >
              <IoIosArrowBack size={18} />
              <span>Back to Login</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SendResetForm

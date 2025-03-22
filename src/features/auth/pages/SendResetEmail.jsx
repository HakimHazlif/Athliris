import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import ResetHeader from '../components/ResetHeader'
import { userData } from '../../../app/slices/authSlice'
import SendResetForm from '../components/SendResetForm'

const SendResetEmail = () => {
  const { status } = useSelector((state) => state.user)
  const { email } = useSelector(userData)

  const [isSended, setIsSended] = useState(false)

  useEffect(() => {
    if (status === 'password changing') setIsSended(true)
  }, [status, setIsSended])

  return (
    <>
      {isSended ? (
        <ResetHeader
          title={
            <>
              Check Your <span className="text-neon-500">Email</span>
            </>
          }
          paragraph={
            <>
              We&apos;ve sent instructions on how to reset your password to{' '}
              <span className="text-neon-700 font-semibold">{email}</span>
            </>
          }
        />
      ) : (
        <ResetHeader
          title={
            <>
              Forgot <span className="text-neon-500">Password</span>?
            </>
          }
          paragraph="We will send you an email to reset your password"
        />
      )}
      {isSended ? '' : <SendResetForm />}
    </>
  )
}

export default SendResetEmail

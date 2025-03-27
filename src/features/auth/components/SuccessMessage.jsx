import { useSelector } from 'react-redux'
import { user } from '../../../app/slices/authSlice'
import { GiLetterBomb } from 'react-icons/gi'

const SuccessMessage = () => {
  const { email } = useSelector(user)
  return (
    <div className="flex flex-col text-center justify-center items-center gap-5 p-10">
      <GiLetterBomb size={30} className="text-neon-500" />

      <h3 className="text-orange-coral text-3xl font-bold">Check Your Email</h3>
      <p className="text-slate-500 text-center">
        We&apos;ve sent instructions on how to reset your password to{' '}
        <span className="text-black font-semibold">{`${email}`}</span>
      </p>
    </div>
  )
}

export default SuccessMessage

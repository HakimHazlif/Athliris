import { useSelector } from 'react-redux'
import { user } from '../../../app/slices/authSlice'

const StageDescription = () => {
  const { stage } = useSelector((state) => state.userData)
  const { username } = useSelector(user)

  let text

  switch (stage) {
    case 1:
      text = (
        <p>
          Welcome, <span className="font-oswald text-neon-600">{username}</span>
          ! The first step in your journey towards{' '}
          <span className="text-neon-600">fitness and health</span>. Please fill
          out the following information accurately.
        </p>
      )
      break
    case 2:
      text = (
        <p>
          Help us understand your health background to create a safe and
          personalized <span className="text-neon-600">fitness plan</span>.
        </p>
      )
      break
    case 3:
      text = (
        <p>
          Define your <span className="text-neon-600">fitness objectives</span>{' '}
          and create a roadmap for your health transformation.
        </p>
      )
      break
    case 4:
      text = (
        <p>
          Customize your <span className="text-neon-600">nutrition plan</span>{' '}
          to support your fitness goals and lifestyle.
        </p>
      )
      break
    case 5:
      text = (
        <p>
          Evaluate your current physical condition and exercise experience to
          create a <span className="text-neon-600">tailored approach</span>.
        </p>
      )
      break
    case 6:
      text = (
        <p>
          Identify your available resources and potential{' '}
          <span className="text-neon-600">training locations</span> to optimize
          your fitness journey.
        </p>
      )
      break
    case 7:
      text = (
        <p>
          Choose how you want to stay{' '}
          <span className="text-neon-600">motivated and receive</span> updates
          throughout your fitness journey.
        </p>
      )
      break
    default:
      text = (
        <>
          <h3 className="text-lg font-semibold text-neon-600 mb-2">
            Almost Done!
          </h3>
          <p>
            Thank you for completing your fitness profile. Please review the
            following agreements before finalizing your registration.
          </p>
        </>
      )
  }

  return (
    <div className="mt-2 text-center text-sm dark:text-grayish-300 text-grayish-500">
      {text}
    </div>
  )
}

export default StageDescription

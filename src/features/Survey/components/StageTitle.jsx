import { useSelector } from 'react-redux'

const StageTitle = () => {
  const { stage } = useSelector((state) => state.userData)

  let text

  switch (stage) {
    case 1:
      text = 'Basic Personal Information'
      break
    case 2:
      text = 'Medical History Assessment'
      break
    case 3:
      text = 'Your Fitness Goals Blueprint'
      break
    case 4:
      text = 'Nutritional Strategy Design'
      break
    case 5:
      text = 'Fitness Readiness Assessment'
      break
    case 6:
      text = 'Workout Environment Mapping'
      break
    case 7:
      text = 'Personalized Motivation Tracking'
      break
    default:
      text = 'Confirm Your Information'
  }

  return (
    <h2 className="mt-6 text-center text-4xl font-extrabold leading-relaxed text-grayish-200">
      {text}
    </h2>
  )
}

export default StageTitle

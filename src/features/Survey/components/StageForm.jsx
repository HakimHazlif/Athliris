import { useSelector } from 'react-redux'
import FirstStage from '../forms/FirstStage'
import SecondStage from '../forms/SecondStage'
import ThirdStage from '../forms/ThirdStage'
import FourthStage from '../forms/FourthStage'
import FifthStage from '../forms/FifthStage'
import SixthStage from '../forms/SixthStage'
import SeventhStage from '../forms/SeventhStage'
import ConfirmationForm from '../forms/ConfirmationForm'

const PersonalDataForm = () => {
  const { stage } = useSelector((state) => state.userData)

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
      <div className="bg-white dark:bg-grayish-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        {/* {stage === 1 && <FirstStage />}
        {stage === 2 && <SecondStage />}
        {stage === 3 && <ThirdStage />}
        {stage === 4 && <FourthStage />}
        {stage === 5 && <FifthStage />}
        {stage === 6 && <SixthStage />}
        {stage === 7 && <SeventhStage />} */}
        <ConfirmationForm />
      </div>
    </div>
  )
}

export default PersonalDataForm

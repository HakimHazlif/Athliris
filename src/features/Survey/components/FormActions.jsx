import { useFormikContext } from 'formik'
import { useDispatch, useSelector } from 'react-redux'

import SubmitionButton from '../../../components/SubmitionButton'
import SpinnerMini from '../../../components/ui/SpinnerMini'
import { getStageBack } from '../../../app/slices/userDataSlice'

const FormActions = () => {
  const dispatch = useDispatch()
  const { stage, status } = useSelector((state) => state.userData)
  const { isSubmitting } = useFormikContext()

  return (
    <div
      className={`mt-8 flex ${stage !== 1 ? 'justify-between' : 'justify-end'}`}
    >
      {stage !== 1 && (
        <button
          onClick={() => dispatch(getStageBack())}
          disabled={status === 'loading'}
          className="w-40 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-700 bg-slate-400 hover:bg-slate-500 duration-200 cursor-pointer pointer-events-auto"
        >
          Back
        </button>
      )}
      <div className="w-40">
        <SubmitionButton isSubmitting={isSubmitting}>
          {status === 'loading' ? (
            <SpinnerMini />
          ) : stage === 8 ? (
            'Submit'
          ) : (
            'Next'
          )}
        </SubmitionButton>
      </div>
    </div>
  )
}

export default FormActions

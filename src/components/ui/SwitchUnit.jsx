import { useDispatch, useSelector } from 'react-redux'
import { healthFitnessUser, switchUnit } from '../../app/slices/userDataSlice'

const SwitchUnit = ({ label }) => {
  const dispatch = useDispatch()
  const { unit } = useSelector(healthFitnessUser)

  return (
    <div className="flex justify-between items-center">
      <label className="hidden text-sm font-medium text-gray-700 dark:text-grayish-300">
        {label}
      </label>
      <button
        type="button"
        onClick={() => dispatch(switchUnit())}
        className="text-xs text-blue-500 hover:text-blue-700 cursor-pointer pointer-events-auto"
      >
        Switch to {unit === 'metric' ? 'Imperial' : 'Metric'}
      </button>
    </div>
  )
}

export default SwitchUnit

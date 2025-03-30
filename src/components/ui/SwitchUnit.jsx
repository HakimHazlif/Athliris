const SwitchUnit = ({ label, unit, setUnit }) => {
  return (
    <div className="flex justify-between items-center">
      <label className="hidden text-sm font-medium text-gray-700 dark:text-grayish-300">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}
        className="text-xs text-blue-500 hover:text-blue-700"
      >
        Switch to {unit === 'metric' ? 'Imperial' : 'Metric'}
      </button>
    </div>
  )
}

export default SwitchUnit

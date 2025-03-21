import { ErrorMessage, Field } from 'formik'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const InputField = ({
  id,
  label,
  icon,
  type,
  placeholder,
  error,
  touched,
  forPassword = false,
  showPassword = null,
  setShowPassword = null,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <Field
          type={type}
          name={id}
          id={id}
          className={`block w-full pl-10 pr-3 py-2 border ${
            error && touched ? 'border-red-300' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          placeholder={placeholder}
        />
        {forPassword && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              {showPassword ? (
                <FiEyeOff className="h-5 w-5" />
              ) : (
                <FiEye className="h-5 w-5" />
              )}
            </button>
          </div>
        )}
      </div>
      <ErrorMessage
        name={id}
        component="div"
        className="mt-1 text-sm text-red-600"
      />
    </div>
  )
}

export default InputField

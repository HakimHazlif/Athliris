import { ErrorMessage, Field, useFormikContext } from 'formik'

const TextareaInput = ({ id, label, rows = 2, placeholder, icon = null }) => {
  const { errors, touched } = useFormikContext()

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-grayish-700 dark:text-grayish-300"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <Field
          as="textarea"
          name={id}
          id={id}
          rows={rows}
          className={`block w-full ${icon ? 'pl-10' : 'pl-3'} pr-3 py-2 border text-black dark:text-white dark:bg-grayish-500 ${
            errors[id] && touched[id]
              ? 'border-red-500'
              : 'border-gray-300 dark:border-grayish-700'
          } rounded-md focus:outline-none focus:ring-neon-500 focus:border-neon-500 sm:text-sm`}
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage
        name={id}
        component="div"
        className="mt-1 text-sm text-red-600"
      />
    </div>
  )
}

export default TextareaInput

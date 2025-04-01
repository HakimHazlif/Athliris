import { ErrorMessage, Field, useFormikContext } from 'formik'

const SelectInput = ({ id, label, options, defaultOption }) => {
  const { touched, errors, setFieldTouched } = useFormikContext()

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-grayish-700 dark:text-grayish-300"
      >
        {label}
      </label>
      <Field
        as="select"
        name={id}
        className={`mt-1 block w-full px-3 py-2 border text-black dark:text-white dark:bg-grayish-500 ${
          errors[id] && touched[id]
            ? 'border-red-300'
            : 'border-gray-300 dark:border-grayish-700'
        } rounded-md focus:outline-none focus:ring-neon-500 focus:border-neon-500 sm:text-sm`}
        onBlur={() => setFieldTouched(id, true)}
      >
        <option value="">{defaultOption}</option>
        {options.map((option) => (
          <option
            key={option.id}
            value={option.label}
            className="pointer-events-auto cursor-pointer"
          >
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={id}
        component="div"
        className="mt-1 text-sm text-red-600"
      />
    </div>
  )
}

export default SelectInput

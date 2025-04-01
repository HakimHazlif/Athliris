import { ErrorMessage, Field } from 'formik'

const CheckboxGroup = ({ options, label, id }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-grayish-700 dark:text-grayish-300 mb-2"
      >
        {label}
      </label>
      <div
        className="flex flex-wrap gap-10 gap-y-4 justify-center"
        role="group"
        aria-labelledby="checkbox-group"
      >
        {options.map((opt) => (
          <div
            key={opt.id}
            className="flex items-center justify-start cursor-pointer pointer-events-auto"
          >
            <Field
              type="checkbox"
              name={id}
              value={opt.label}
              id={opt.id}
              className="hidden peer"
            />
            <label
              className="w-28 h-28 border border-grayish-400 rounded-md flex flex-col justify-center items-center gap-2 cursor-pointer focus:ring-2 text-gray-700 dark:text-white
              peer-checked:border-neon-500 peer-checked:bg-neon-200 peer-checked:text-neon-900 font-bold"
              htmlFor={opt.id}
            >
              {opt.icon && <div className="text-2xl">{opt.icon}</div>}
              <span className="w-4/5 text-center text-xs font-medium">
                {opt.label}
              </span>
            </label>
          </div>
        ))}
      </div>
      <ErrorMessage
        name={id}
        component="div"
        className="text-red-600 text-sm mt-1"
      />
    </div>
  )
}

export default CheckboxGroup

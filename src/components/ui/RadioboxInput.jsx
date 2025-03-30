import { ErrorMessage, Field } from 'formik'

const RadioboxInput = ({ options, label, id }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-grayish-700 dark:text-grayish-300 mb-2"
      >
        {label}
      </label>
      <div
        className="grid grid-cols-4 gap-2"
        role="group"
        aria-labelledby="checkbox-group"
      >
        {options.map((opt) => (
          <div key={opt.id} className="flex items-center justify-start">
            <Field
              type="radio"
              name={id}
              value={opt.id}
              id={opt.id}
              className="hidden peer"
            />
            <label
              className="w-24 h-24 border border-grayish-400 rounded-md flex flex-col justify-center items-center gap-2 cursor-pointer focus:ring-2 focus:ring-neon-500 text-gray-700 dark:text-white
              peer-checked:border-neon-500 peer-checked:bg-neon-200 peer-checked:text-neon-700 font-bold"
              htmlFor={opt.id}
            >
              {opt.icon && <div className="text-2xl">{opt.icon}</div>}
              <span className="w-4/5 text-center text-[10px] font-medium">
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

export default RadioboxInput

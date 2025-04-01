import { ErrorMessage, Field } from 'formik'

const RadioInput = ({ options, id, label }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-grayish-700 dark:text-grayish-300"
      >
        {label}
      </label>
      <div className="flex justify-between">
        {options.map((opt) => (
          <div className="inline-flex gap-2 items-center " key={opt}>
            <div className="flex items-center justify-center relative w-4 h-4">
              <Field
                type="radio"
                name={id}
                id={opt}
                value={opt}
                className="peer opacity-0 absolute z-20 w-full h-full rounded-full cursor-pointer pointer-events-auto"
              />
              <div className="absolute w-full h-full border-2 border-gray-300 peer-checked:border-neon-500 rounded-full flex justify-center items-center z-10"></div>
              <div className="absolute w-2 h-2 rounded-full bg-transparent peer-checked:bg-neon-500 z-0"></div>
            </div>
            <label
              htmlFor={opt}
              className="mr-2 capitalize text-gray-800 dark:text-grayish-200 cursor-pointer pointer-events-auto"
            >
              {opt}
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

export default RadioInput

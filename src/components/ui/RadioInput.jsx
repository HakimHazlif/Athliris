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
          <label className="inline-flex gap-2 items-center relative" key={opt}>
            <Field type="radio" name={id} value={opt} className="hidden peer" />
            <div className="w-4 h-4 border-2 border-gray-300 rounded-full flex justify-center items-center"></div>
            <div className="absolute left-[3px] top-[6.7px] w-[10px] h-[10px] rounded-full bg-transparent peer-checked:bg-neon-500"></div>
            <span className="mr-2 capitalize text-gray-800 dark:text-grayish-200">
              {opt}
            </span>
          </label>
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

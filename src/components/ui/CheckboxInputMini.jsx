import { ErrorMessage, Field } from 'formik'
import { FaCheck } from 'react-icons/fa'

const CheckboxInputMini = ({ label, id }) => {
  return (
    <div className="">
      <div className="inline-flex gap-4 items-start cursor-pointer pointer-events-auto">
        <div className="relative flex justify-center items-start mt-1 ">
          <Field
            type="checkbox"
            name={id}
            id={id}
            className="peer w-[17px] h-[17px] opacity-0 absolute z-20"
          />
          <FaCheck className="peer-checked:opacity-100 opacity-0 absolute z-10" />
          <div className="w-4 h-4 peer-checked:bg-neon-400 border-2 border-gray-300 peer-checked:border-neon-400 rounded-sm flex justify-center items-center absolute z-0"></div>
        </div>
        <label
          htmlFor={id}
          className="capitalize text-gray-800 dark:text-grayish-200"
        >
          {label}
        </label>
      </div>

      <ErrorMessage
        name={id}
        component="div"
        className="text-red-600 text-sm mt-1"
      />
    </div>
  )
}

export default CheckboxInputMini

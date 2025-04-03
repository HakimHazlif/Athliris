import { MdOutlineFolderOff } from 'react-icons/md'

const EmptyState = ({ dataType }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-gray-500">
      <MdOutlineFolderOff className="text-6xl text-gray-400 mb-2" />
      <p className="text-lg font-semibold">No {dataType} training available</p>
      <p className="text-sm text-gray-400">
        Try again later or check another section.
      </p>
    </div>
  )
}

export default EmptyState

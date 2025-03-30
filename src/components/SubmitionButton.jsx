const SubmitionButton = ({ children, isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neon-600 hover:bg-neon-700 duration-200"
    >
      {children}
    </button>
  )
}

export default SubmitionButton

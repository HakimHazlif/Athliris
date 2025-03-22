const SubmitionButton = ({ children, isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neon-600 hover:bg-neon-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-500 duration-200"
    >
      {children}
    </button>
  )
}

export default SubmitionButton

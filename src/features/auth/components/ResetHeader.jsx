const ResetHeader = ({ title, paragraph }) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-4xl font-extrabold leading-relaxed text-grayish-200">
        {title}
      </h2>
      <p className="mt-2 text-center text-sm text-grayish-300">{paragraph}</p>
    </div>
  )
}

export default ResetHeader

const BodyStat = ({ unit, stat, label }) => {
  return (
    <div className="text-center">
      <p className="">
        {stat} <span className="text-[10px] text-gray-400">{unit}</span>
      </p>
      <p className="text-gray-500 dark:text-gray-300">{label}</p>
    </div>
  )
}

export default BodyStat

import StageDescription from './StageDescription'
import StageTitle from './StageTitle'

const StageHeader = () => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-lg">
      <StageTitle />
      <StageDescription />
    </div>
  )
}

export default StageHeader

import { IoSettingsOutline } from 'react-icons/io5'
import UserAvatar from '../components/ui/UserAvatar'
import ThemeToggle from '../components/ui/ThemeToggle'
import BodyStat from '../components/ui/BodyStat'
import { IoIosArrowDown } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { user } from '../app/slices/authSlice'
import { healthFitnessUser } from '../app/slices/userDataSlice'
import { calculateAge } from '../utils/helper'
import { FiBell } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const UserPanel = () => {
  const navigate = useNavigate()
  const { username } = useSelector(user)
  const { personalData, unit } = useSelector(healthFitnessUser)
  return (
    <aside className="w-72 h-screen bg-white dark:bg-grayish-500 shadow-md pt-7 px-5 text-sm">
      <div className="flex flex-row-reverse gap-4 items-center ">
        <button className="flex flex-row-reverse gap-2 items-center">
          <IoIosArrowDown size={16} />
          <UserAvatar size="w-6 h-6" textSize="text-xs" />
        </button>

        <button
          onClick={() =>
            navigate(`/user/${username.replace(' ', '-')}/settings`)
          }
        >
          <IoSettingsOutline size={26} />
        </button>
        <ThemeToggle />
      </div>

      <div className="py-10">
        <div className="flex flex-col items-center gap-3 mb-4">
          <UserAvatar size="w-20 h-20" textSize="text-5xl" />
          <h2 className="font-montserrat text-base">
            {username || 'Hakim Haz'}
          </h2>
        </div>

        <div className="px-4 py-2 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <BodyStat
              unit={unit === 'metric' ? 'kg' : 'lbs'}
              stat={personalData.weight}
              label="Weight"
            />
            <BodyStat
              unit={unit === 'metric' ? 'm' : 'ft'}
              stat={
                unit === 'metric'
                  ? Number(personalData.height) / 100
                  : Number(personalData.height) / 12
              }
              label="Height"
            />
            <BodyStat
              unit="yrs"
              stat={calculateAge(personalData.birthDate || null)}
              label="Age"
            />
          </div>
        </div>

        <div className="mt-10 h-full">
          <div className="flex justify-between items-center">
            <h3>Reminders</h3>
            <FiBell size={18} />
          </div>
          <div className="h-full flex justify-center items-center">
            <p className="dark:text-gray-500 text-gray-400 text-sm mt-4">
              No reminders yet
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default UserPanel

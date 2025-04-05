import { FaChartLine } from 'react-icons/fa'
import { GiBanana, GiProgression } from 'react-icons/gi'
import { IoMdClock } from 'react-icons/io'
import { LuDumbbell, LuTarget } from 'react-icons/lu'

const Features = () => {
  const features = [
    {
      icon: <LuTarget size={24} />,
      title: 'Personalized Plans',
      description:
        'Custom workout routines designed specifically for your body type and fitness goals.',
    },
    {
      icon: <GiBanana size={24} />,
      title: 'Nutrition Guidance',
      description:
        'Tailored meal recommendations that complement your workout routine and lifestyle.',
    },
    {
      icon: <IoMdClock size={24} />,
      title: 'Time Optimization',
      description:
        'Efficient workout plans that deliver maximum results in minimal time.',
    },
    {
      icon: <LuDumbbell size={24} />,
      title: 'Equipment Flexibility',
      description:
        'Exercises adapted to your available equipment, whether at home or in the gym.',
    },
    {
      icon: <GiProgression size={24} />,
      title: 'Progress Tracking',
      description:
        'Monitor your improvement with detailed metrics and visual progress charts.',
    },
    {
      icon: <FaChartLine size={24} />,
      title: 'Performance Analytics',
      description:
        'Advanced insights into your performance to help optimize your fitness journey.',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Personalized Fitness Journey
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Discover how Athliris adapts to your unique needs and goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="rounded-full bg-neon-100 dark:bg-neon-700/30 p-3 w-12 h-12 flex items-center justify-center mb-4 text-neon-600 dark:text-neon-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

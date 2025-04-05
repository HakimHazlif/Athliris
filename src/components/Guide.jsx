import { LuSalad, LuSquareActivity } from 'react-icons/lu'
import { TbClipboardCheck } from 'react-icons/tb'

const Guide = () => {
  const steps = [
    {
      icon: <TbClipboardCheck size={32} className="text-blue-500" />,
      title: 'Complete Your Profile',
      description:
        'Answer a few questions about your current fitness level, goals, and available resources.',
    },
    {
      icon: <LuSquareActivity size={32} className="text-purple-500" />,
      title: 'Get Your Custom Plan',
      description:
        'Receive a tailored workout regimen designed specifically for your unique situation.',
    },
    {
      icon: <LuSalad size={32} className="text-green-500" />,
      title: 'Follow Your Nutrition Guide',
      description:
        'Access personalized meal recommendations that complement your exercise routine.',
    },
  ]

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-grayish-200 to-gray-100 dark:from-grayish-600 dark:to-grayish-500"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How Athliris Works
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Three simple steps to start your personalized fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 text-center z-20 relative h-full flex flex-col items-center">
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className=" absolute z-10 bg-gradient-to-r from-neon-400 to-teal-400 md:top-1/2 md:-right-3 md:w-12 md:h-1 md:translate-x-6 right-1/2 w-1 h-20 max-md:-translate-y-6 transform"></div>
              )}

              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-neon-500 to-teal-600 text-white font-bold absolute top-0 left-0 transform -translate-x-2 -translate-y-2 z-20">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Guide

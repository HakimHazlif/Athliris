import { privacyPolicy, termsOfService } from '../utils/policiesDocuments'

const PolicyPage = ({ document }) => {
  const elements =
    document === 'termsOfService' ? termsOfService : privacyPolicy

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-3xl mx-auto ">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-center text-neon-700">
            {document === 'termsOfService'
              ? 'Terms of Service'
              : 'Privacy Policy'}
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-300 italic mt-2 mb-6">
            Last Updated: March 30, 2025
          </p>

          <p className="mb-8">
            Welcome to our Athliris Application. By using our services, you
            agree to these Terms of Service. Please read them carefully.
          </p>
        </div>

        <div className="space-y-4">
          {elements.map((el, i) => (
            <div key={el.title}>
              <h2>
                {i + 1}. {el.title}
              </h2>
              {el.description && <p>{el.description}</p>}
              {el.points && (
                <ul className="space-y-2 list-disc list-inside">
                  {el.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PolicyPage

import * as Yup from 'yup'

export const confirmationSchema = Yup.object({
  termsOfService: Yup.boolean()
    .required('You must accept the Terms of Service')
    .oneOf([true], 'You must accept the Terms of Service'),
  privacyPolicy: Yup.boolean()
    .required('You must accept the Privacy Policy')
    .oneOf([true], 'You must accept the Privacy Policy'),
  dataConsent: Yup.boolean()
    .required('You must provide consent for data collection')
    .oneOf([true], 'You must provide consent for data collection'),
})

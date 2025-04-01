import * as Yup from 'yup'

const ConfirmationSchema = Yup.object().shape({
  termsOfServiceAgreement: Yup.boolean()
    .required('You must accept the Terms of Service')
    .oneOf([true], 'You must accept the Terms of Service'),
  privacyPolicyAgreement: Yup.boolean()
    .required('You must accept the Privacy Policy')
    .oneOf([true], 'You must accept the Privacy Policy'),
  dataConsentAgreement: Yup.boolean()
    .required('You must provide consent for data collection')
    .oneOf([true], 'You must provide consent for data collection'),
})

export default ConfirmationSchema

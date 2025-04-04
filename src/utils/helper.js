export function calculateAge(birthdate) {
  if (!birthdate) return null

  const birthDate = birthdate['seconds']
    ? new Date(birthdate.seconds * 1000)
    : new Date(birthdate)
  const today = new Date()

  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  const dayDiff = today.getDate() - birthDate.getDate()

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--
  }

  return age
}

export const getPathSegment = () => {
  const path = window.location.pathname
  const segments = path.split('/')
  const lastSegment = segments[segments.length - 1]
  console.log(lastSegment)
  return lastSegment
}

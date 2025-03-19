export const URL_Base = 'https://wger.de/api/v2'

export const apiHeader = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_WGER_TOKEN}`,
  },
}

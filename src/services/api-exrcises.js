import axios from 'axios'
import { apiHeader, URL_Base } from './api-header'

export async function getDay() {
  try {
    const res = await axios.get(
      'https://wger.de/api/v2/exerciseinfo/345/',
      apiHeader
    )

    console.log(res)
    // return data
  } catch (err) {
    console.log(err.message)
    throw new Error(err.message)
  }
}

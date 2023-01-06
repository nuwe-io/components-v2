import axios from 'axios'

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL

const instance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

const catchAxios = async (fn: any) =>
  fn
    .then((res: any) => res)
    .catch(() => {
      return false
    })

export const technologiesRepository = {
  getAllTechnologies: async () => catchAxios(instance.get(`${BACKEND_URL}/technologies`))
}

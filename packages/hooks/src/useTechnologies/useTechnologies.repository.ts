import axios from 'axios'

const instance = axios.create({
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

export const technologiesRepository = (BACKEND_URL: string) => ({
  getAllTechnologies: async () => catchAxios(instance.get(`${BACKEND_URL}/technologies`))
})

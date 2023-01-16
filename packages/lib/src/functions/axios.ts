import axios from 'axios'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

const catchAxios = async (fn: any) => fn.then((res: any) => res).catch((err: any) => err.response)

export const fetch = (body: any) => catchAxios(instance(body))

const methods = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
  patch: 'patch'
}

export { catchAxios, instance, methods }

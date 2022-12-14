import axios from 'axios'

const api = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

const get = async (endpoint: string, options: any) => api.get(endpoint, options)
const post = async (endpoint: string, body: any) => api.post(endpoint, body)
const put = async (endpoint: string, body: any) => api.put(endpoint, body)
const patch = async (endpoint: string, body: any) => api.patch(endpoint, body)

export const http = {
  get,
  post,
  put,
  patch
}

import axios, { AxiosResponse } from "axios"

const request = axios.create({
  baseURL: "http://localhost:3002"
})

request.interceptors.response.use((res: AxiosResponse) => {
  if (res?.status !== 200) {
    return null
  }
  return res.data
})

export { request }

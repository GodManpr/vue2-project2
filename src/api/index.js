import axios from "axios"
import {codePrompt} from "@/utils/exceptions";

axios.defaults.baseURL = ''

axios.interceptors.request.use(config => {
  // config.headers[]
  return config
})

axios.interceptors.response.use(res => {
  const {code, msg} = res.data
  if (code != 20000) {
    codePrompt(msg)
  }

  return res
}, error => {
  Promise.reject(error)
})

export default axios
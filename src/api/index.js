import axios from "axios"
import {codePrompt} from "@/utils/exceptions";
import {useToken} from "@/utils/useToken";

const {getToken} = useToken()

axios.defaults.baseURL = 'http://49.235.128.49:5059/api/'

axios.interceptors.request.use(config => {
    const token = getToken()
    if (token) {
        config.headers['token'] = token
    }
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
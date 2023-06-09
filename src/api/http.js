import axios from '.';

const http = {
  get: (url, params) => axios.get(url, {params}),
  post: (url, params) => axios.post(url, params),
  put: (url, params) => axios.put(url, params),
  delete: (url, params) => axios.delete(url, params),
  upload: (url, params) => axios.post(url, params, {
    headers: {'Content-Type': 'multipart/form-data'}
  }),
}

export default http
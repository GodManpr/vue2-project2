export const useToken = () => {
  const tokenKey = 'token'
  const setToken = token => sessionStorage.setItem(tokenKey, token)
  const getToken = () => sessionStorage.getItem(tokenKey)
  const removeToken = () => sessionStorage.removeItem(tokenKey)
  return {
    setToken, getToken, removeToken
  }
}
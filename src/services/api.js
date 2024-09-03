import axios from 'axios'

const apiDevBurger = axios.create({
  baseURL: 'http://localhost:3001',
  // baseURL: 'https://devburger-api-production.up.railway.app/',
})
// pegando token de validação do backend
apiDevBurger.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem('devburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`

  return config
})

export default apiDevBurger

import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'https://devburger-api-production.up.railway.app/',
})
// pegando token de validação do backend
apiCodeBurger.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`

  return config
})

export default apiCodeBurger

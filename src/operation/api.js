import axios from 'axios'

export const tribeApi = axios.create({
  baseURL: 'http://localhost:3004/'
})

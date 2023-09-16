import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://api.github.com/users',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

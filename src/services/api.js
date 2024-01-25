import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://food-back-end.onrender.com'
})
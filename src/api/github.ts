import axios from 'axios'

const connexion = axios.create({
    baseURL: 'https://api.github.com'
})

export default connexion;
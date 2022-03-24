import axios from 'axios'

const instance = axios.create({
    baseURL:'https://iproject-ignaways.herokuapp.com/'
})

export default instance
import axios from "axios"

const API  = axios.create({
    baseURL:"https://admin.urbandrive.co.ke/"
})

export default API;
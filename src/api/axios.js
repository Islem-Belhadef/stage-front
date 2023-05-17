import axios from "axios";
import {Cookies} from "react-cookie"

const cookies = new Cookies()
const token = cookies.get('token')

const authAxios = axios.create()
authAxios.defaults.baseURL = 'http://127.0.0.1:8000/api'
authAxios.defaults.headers = {
    'content-Type':'application/json',
     Accept: 'application/json',
     'Authorization':`Bearer ${token}`
}

export default authAxios
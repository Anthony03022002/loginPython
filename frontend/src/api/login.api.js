import axios from "axios";

const registroApi = axios.create({
    baseURL: 'http://localhost:8000/register'
})

export const registrarse = (registro) => registroApi.post('/', registro);


const loginApi = axios.create({
    baseURL: 'http://localhost:8000/login'
})

export const loguearse = (login) => loginApi.post('/', login);



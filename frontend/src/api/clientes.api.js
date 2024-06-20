import axios from "axios";

const clientesApi = axios.create({
   baseURL: 'http://localhost:8000/clientes/clientes/'
})

export const getAllClientes = () => clientesApi.get('/');

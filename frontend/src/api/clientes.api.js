import axios from "axios";

export const getClientes = () =>{
   return axios.get('http://localhost:8000/clientes/clientes/')
}


import React, { useEffect } from "react";
import { getClientes } from "../api/clientes.api";

export const ClientesList = () => {
  useEffect(() => {
    async function listaClientes() {
      const res = await getClientes();
      console.log(res)
    }
    listaClientes();
  }, []);

  return <div>Lista de clientes</div>;
};

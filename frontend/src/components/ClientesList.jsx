import React, { useEffect, useState } from "react";
import { getAllClientes } from "../api/clientes.api";

export const ClientesList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function listaClientes() {
      const res = await getAllClientes();
      setClientes(res.data);
    }
    listaClientes();
  }, []);

  return (
    <div>
      <h1>Clientes</h1>
      <div>
        {clientes.map((cliente) => (
          <div key={cliente.id}>
            <p>Nombre: {cliente.nombre}</p>
            <p>Apellido: {cliente.apellido}</p>
            <p>Precio: {cliente.precio}</p>
            <p>Fecha: {cliente.fecha}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

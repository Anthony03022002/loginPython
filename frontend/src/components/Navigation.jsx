import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <Link to="/clientes">
        <h1>Aplicacion de clientes</h1>
      </Link>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/registro">Registrase</Link>
      <br />
      <Link to="/clientes">Clientes</Link>
      <br />
      <Link to="/crear-clientes">Crear Cliente</Link>
    </div>
  );
};

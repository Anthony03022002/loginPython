// Importa las librerías necesarias
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loguearse } from "../api/login.api";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión
  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await loguearse(data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      navigate("/clientes");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setLoginError("Usuario o contraseña incorrectos");
      } else {
        setLoginError("Ha ocurrido un error, por favor inténtalo nuevamente");
      }
    }
  });

  return (
    <div className="container d-flex justify-content-center">
      <form onSubmit={onSubmit} className="border border-dark p-4 rounded">
      <h1 className="text-center">Login</h1>
        <div className="mt-3">
          <label className="form-label">Usuario</label>
          <input
            type="text"
            placeholder="Usuario"
            className="form-control form-control-sm"
            {...register("username", { required: true })}
          />
          {errors.username && <span>Este campo es requerido</span>}
        </div>
        <div className="mt-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            className="form-control form-control-sm"
            {...register("password", { required: true })}
          />
        {errors.password && <span>Este campo es requerido</span>}
        </div>
        <button className="btn btn-primary mt-2">Login</button>
        {loginError && <span>{loginError}</span>}
      </form>
    </div>
  );
};

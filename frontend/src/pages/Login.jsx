// Importa las librerías necesarias
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loguearse } from '../api/login.api';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión
  const onSubmit = handleSubmit(async data => {
    try {
      const response = await loguearse(data); // Llama a la función de login para obtener el token
      const token = response.data.token; // Suponiendo que el token está en la propiedad 'token' del objeto de respuesta
      localStorage.setItem('token', token); // Almacena el token en el almacenamiento local del navegador
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Configura el token como cabecera por defecto para Axios
      navigate('/clientes');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setLoginError('Usuario o contraseña incorrectos');
      } else {
        setLoginError('Ha ocurrido un error, por favor inténtalo nuevamente');
      }
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* Input para el nombre de usuario */}
        <input
          type="text"
          placeholder="Usuario"
          {...register("username", { required: true })}
        />
        {errors.username && <span>Este campo es requerido</span>}
        {/* Input para la contraseña */}
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Este campo es requerido</span>}
        {/* Botón para iniciar sesión */}
        <button>Login</button>
        {/* Mostrar mensaje de error */}
        {loginError && <span>{loginError}</span>}
      </form>
    </div>
  );
};

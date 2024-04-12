import { useForm } from "react-hook-form";
import { registrarse } from "../api/login.api";
import { useNavigate } from "react-router-dom";

export const Registarse = () => {
  const { register, handleSubmit, formState:{
    errors
  } } = useForm();

  const navigate = useNavigate();

    const onSubmit = handleSubmit(async data =>{
        await registrarse(data);
        navigate("/clientes");
    })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Ingrese su email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Este campo es requerido</span>}
        <input
          type="text"
          placeholder="Usuario"
          {...register("username", { required: true })}
        />
        {errors.username && <span>Este campo es requerido</span>}
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Este campo es requerido</span>}
        <button>Registrarse</button>
      </form>
    </div>
  );
};

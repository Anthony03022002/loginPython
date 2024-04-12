import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ClientePage } from "./pages/ClientePage";
import { ClienteFormPage } from "./pages/ClienteFormPage";
import { Login } from "./pages/Login";
import { Registarse } from "./pages/Registarse";
import { Navigation } from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registarse />} />
        <Route path="/clientes" element={<ClientePage />} />
        <Route path="/crear-clientes" element={<ClienteFormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

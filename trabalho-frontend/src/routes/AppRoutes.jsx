import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Listagem from "../pages/Listagem";
import Sobre from "../pages/Sobre";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/listagem" element={<Listagem />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>

        <li>
          <Link to="/cadastro">Cadastro</Link>
        </li>

        <li>
          <Link to="/listagem">Listagem</Link>
        </li>

        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
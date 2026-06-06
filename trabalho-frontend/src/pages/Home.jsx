import { useContext } from "react";
import { TeamContext } from "../context/TeamContext";

function Home() {
  const { times } = useContext(TeamContext);

  return (
    <div>
      <h1>FutManager</h1>

      <h2>Sistema de Gestão de Times de Futebol</h2>

      <h3>Total de Times Cadastrados</h3>

      <p>{times.length}</p>
    </div>
  );
}

export default Home;
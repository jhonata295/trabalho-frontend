import { useContext } from "react";
import { TeamContext } from "../context/TeamContext";

function Home() {
  const { times } = useContext(TeamContext);

  const ultimosTimes = [...times].slice(-3);

  return (
    <div>
      <h1>⚽ FutManager</h1>

      <h2>Sistema de Gestão de Times de Futebol</h2>

      <div>
        <h3>Total de Times Cadastrados</h3>
        <p>{times.length}</p>
      </div>

      <div>
        <h3>Últimos Times Cadastrados</h3>

        {ultimosTimes.length === 0 ? (
          <p>Nenhum time cadastrado.</p>
        ) : (
          ultimosTimes.map((time) => (
            <div key={time.id}>
              <p>{time.nome}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
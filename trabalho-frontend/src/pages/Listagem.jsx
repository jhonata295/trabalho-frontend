import { useContext, useState, useEffect } from "react";
import { TeamContext } from "../context/TeamContext";

import TeamCard from "../components/TeamCard";
import SearchBar from "../components/SearchBar";

import api from "../services/api";

function Listagem() {
  const { times } = useContext(TeamContext);

  const [busca, setBusca] = useState("");
  const [timesApi, setTimesApi] = useState([]);

  useEffect(() => {
    async function buscarTimes() {
      try {
        const response = await api.get(
          "/search_all_teams.php?l=Brazilian%20Serie%20A"
        );

        setTimesApi(response.data.teams || []);
      } catch (error) {
        console.error("Erro ao buscar times:", error);
      }
    }

    buscarTimes();
  }, []);

  const timesFiltrados = times.filter((time) =>
    time.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container">
      <h1>⚽ Listagem de Times</h1>

      <p>
        Consulte os times cadastrados no sistema e os clubes carregados pela
        API de futebol.
      </p>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <SearchBar busca={busca} setBusca={setBusca} />
      </div>

      <section>
        <h2>📋 Times Cadastrados</h2>

        {timesFiltrados.length === 0 ? (
          <div className="card">
            <p>Nenhum time cadastrado.</p>
          </div>
        ) : (
          timesFiltrados.map((time) => (
            <TeamCard
              key={time.id}
              time={time}
            />
          ))
        )}
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>🌎 Times da API</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {timesApi.map((time) => (
            <div className="card" key={time.idTeam}>
              <h3>{time.strTeam}</h3>

              <img
                src={time.strBadge}
                alt={time.strTeam}
              />

              <p>
                <strong>🏟 Estádio:</strong>
                {" "}
                {time.strStadium}
              </p>

              <p>
                <strong>📅 Fundação:</strong>
                {" "}
                {time.intFormedYear}
              </p>

              <p>
                <strong>🌍 País:</strong>
                {" "}
                {time.strCountry}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Listagem;
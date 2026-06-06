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
    <div>
      <h1>Listagem de Times</h1>

      <SearchBar
        busca={busca}
        setBusca={setBusca}
      />

      <h2>Times Cadastrados</h2>

      {timesFiltrados.map((time) => (
        <TeamCard
          key={time.id}
          time={time}
        />
      ))}

      <h2>Times da API</h2>

      {timesApi.map((time) => (
        <div key={time.idTeam}>
          <h3>{time.strTeam}</h3>

          <img
            src={time.strBadge}
            alt={time.strTeam}
            width="80"
          />

          <p>Estádio: {time.strStadium}</p>

          <p>Fundação: {time.intFormedYear}</p>
        </div>
      ))}
    </div>
  );
}

export default Listagem;
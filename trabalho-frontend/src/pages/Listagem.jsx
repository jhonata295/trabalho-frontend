import { useContext, useState } from "react";
import { TeamContext } from "../context/TeamContext";

import TeamCard from "../components/TeamCard";
import SearchBar from "../components/SearchBar";

function Listagem() {
  const { times } = useContext(TeamContext);

  const [busca, setBusca] = useState("");

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

      {timesFiltrados.map((time) => (
        <TeamCard
          key={time.id}
          time={time}
        />
      ))}
    </div>
  );
}

export default Listagem;
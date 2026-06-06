import { useContext } from "react";
import { TeamContext } from "../context/TeamContext";

function Home() {
  const { times } = useContext(TeamContext);

  const ultimosTimes = [...times].slice(-3);

  return (
    <div className="container">
      <h1>⚽ FutManager</h1>

      <h2>Sistema de Gestão de Times de Futebol</h2>

      <p>
        Gerencie seus times favoritos, acompanhe informações e mantenha seus
        cadastros organizados em um único lugar.
      </p>

      <div className="stats">
        <div className="stat-card">
          <h3>Total de Times</h3>
          <p>{times.length}</p>
        </div>

        <div className="stat-card">
          <h3>Últimos Cadastros</h3>

          {ultimosTimes.length === 0 ? (
            <p style={{ fontSize: "16px" }}>Nenhum time cadastrado</p>
          ) : (
            ultimosTimes.map((time) => (
              <div key={time.id}>
                <p style={{ fontSize: "16px" }}>
                  ⚽ {time.nome}
                </p>
              </div>
            ))
          )}
        </div>

        <div className="stat-card">
          <h3>Status do Sistema</h3>
          <p style={{ fontSize: "16px" }}>✅ Online</p>
        </div>
      </div>

      <section style={{ marginTop: "40px" }}>
        <h2>Recursos do Sistema</h2>

        <div className="stats">
          <div className="card">
            <h3>📝 Cadastro</h3>
            <p>Cadastre novos times com cidade e técnico.</p>
          </div>

          <div className="card">
            <h3>📋 Listagem</h3>
            <p>Visualize todos os times cadastrados.</p>
          </div>

          <div className="card">
            <h3>🌎 API de Futebol</h3>
            <p>Consuma dados reais de clubes através da API.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
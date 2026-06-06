import { useState, useContext } from "react";
import { TeamContext } from "../context/TeamContext";

function Cadastro() {
  const { adicionarTime } = useContext(TeamContext);

  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [tecnico, setTecnico] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !cidade || !tecnico) {
      alert("Preencha todos os campos");
      return;
    }

    if (nome.length < 3) {
      alert("Nome deve ter no mínimo 3 caracteres");
      return;
    }

    adicionarTime({
      id: Date.now(),
      nome,
      cidade,
      tecnico,
    });

    alert("✅ Time cadastrado com sucesso!");

    setNome("");
    setCidade("");
    setTecnico("");
  };

  return (
    <div className="container">
      <h1>⚽ Cadastro de Times</h1>

      <p>
        Cadastre novos times para gerenciar suas informações no sistema.
      </p>

      <form onSubmit={handleSubmit}>
        <h2>Informações do Time</h2>

        <input
          type="text"
          placeholder="⚽ Nome do Time"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="📍 Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <input
          type="text"
          placeholder="👨‍🏫 Técnico"
          value={tecnico}
          onChange={(e) => setTecnico(e.target.value)}
        />

        <button type="submit">
          ➕ Cadastrar Time
        </button>
      </form>

      <section style={{ marginTop: "30px" }}>
        <div className="card">
          <h3>💡 Dica</h3>
          <p>
            Cadastre times para visualizá-los posteriormente na página de
            listagem.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Cadastro;
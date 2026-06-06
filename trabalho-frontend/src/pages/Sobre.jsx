function Sobre() {
  return (
    <div className="container">
      <h1>📖 Sobre o Projeto</h1>

      <p>
        O <strong>FutManager</strong> é uma aplicação web desenvolvida em React
        com o objetivo de auxiliar no gerenciamento de times de futebol.
      </p>

      <p>
        O sistema permite cadastrar equipes, visualizar informações dos times
        registrados e consultar dados reais através de uma API de futebol,
        simulando um cenário real de desenvolvimento frontend.
      </p>

      <section style={{ marginTop: "30px" }}>
        <h2>🎯 Objetivos do Projeto</h2>

        <div className="stats">
          <div className="card">
            <h3>⚽ Gestão de Times</h3>
            <p>
              Permitir o cadastro e organização de equipes de futebol.
            </p>
          </div>

          <div className="card">
            <h3>🔄 Estado Compartilhado</h3>
            <p>
              Compartilhar informações entre páginas utilizando Context API.
            </p>
          </div>

          <div className="card">
            <h3>🌎 Integração com API</h3>
            <p>
              Consumir e exibir dados reais de clubes de futebol.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>🛠️ Tecnologias Utilizadas</h2>

        <div className="stats">
          <div className="card">
            <h3>⚛️ React</h3>
            <p>Biblioteca principal para construção da interface.</p>
          </div>

          <div className="card">
            <h3>🧭 React Router</h3>
            <p>Responsável pela navegação entre páginas.</p>
          </div>

          <div className="card">
            <h3>📦 Context API</h3>
            <p>Gerenciamento de estado compartilhado.</p>
          </div>

          <div className="card">
            <h3>🔗 Axios</h3>
            <p>Consumo de dados de APIs REST.</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>👨‍💻 Equipe</h2>

        <div className="card">
          <p><strong>Jhonata Matos Ribeiro</strong></p>
          <p>Desenvolvimento Frontend, Navegação e Context API.</p>
        </div>

        <div className="card">
          <p><strong>Mario</strong></p>
          <p>Formulários, API REST e Listagem de Dados.</p>
        </div>
      </section>
    </div>
  );
}

export default Sobre;
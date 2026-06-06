function TeamCard({ time }) {
  return (
    <div>
      <h3>{time.nome}</h3>

      <p>Cidade: {time.cidade}</p>

      <p>Técnico: {time.tecnico}</p>
    </div>
  );
}

export default TeamCard;
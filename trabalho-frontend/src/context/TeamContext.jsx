import { createContext, useState } from "react";

export const TeamContext = createContext();

export function TeamProvider({ children }) {
  const [times, setTimes] = useState([]);

  const adicionarTime = (novoTime) => {
    setTimes([...times, novoTime]);
  };

  const removerTime = (id) => {
    setTimes(times.filter((time) => time.id !== id));
  };

  const editarTime = (id, dadosAtualizados) => {
    setTimes(
      times.map((time) =>
        time.id === id ? { ...time, ...dadosAtualizados } : time
      )
    );
  };

  return (
    <TeamContext.Provider
      value={{
        times,
        adicionarTime,
        removerTime,
        editarTime,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
}
import React, { createContext } from "react";
import { useState, useEffect } from "react";

// Creiamo il contesto per la gestione del tema (chiaro o scuro)
// Il valore di default del contesto sarà null
export const AuthContext = createContext(null);

// Passiamo al componente tutti i figli che verranno renderizzati sotto di esso
export default function AuthContextProvider({ children }) {
  // Inizializziamo lo stato del componente di contesto
  // Lo stato rappresenterà il tema utilizzato dall'utente (chiaro o scuro)
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(token !== "");
  }, [token]);

  // Creiamo un oggetto con tutti i valori che verranno condivisi pubblicamente
  // con tutti i componenti che possono accedere al contesto
  const value = {
    token,
    setToken,
    authenticated,
  };

  // Passiamo l'oggetto dei valori condivisi nella prop "value"
  // Rendirizziamo poi tutti i figli del componente di contesto
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

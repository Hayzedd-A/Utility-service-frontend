import React, { createContext, useState } from "react";

export const AppContext = createContext();
export function AppProvider({ children }) {
  const [loginForm, setLoginForm] = useState("login");
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{ loginForm, setLoginForm, modalOpen, setModalOpen }}
    >
      {children}
    </AppContext.Provider>
  );
}

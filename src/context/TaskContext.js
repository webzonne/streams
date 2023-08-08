import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const initUser = {
    email: '',
    contrasena: ''
  };

  const storedRegistro = JSON.parse(localStorage.getItem('registro')) || [];

  const [usuario, setUsuario] = useState(initUser);
  const [registro, setRegistro] = useState(storedRegistro);

  const values = {
    usuario,
    setUsuario,
    registro,
    setRegistro
  };

  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

import { createContext, useState } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const data = {
    mode,
    setMode,
    token,
    setToken,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GlobalContext, GlobalContextProvider };

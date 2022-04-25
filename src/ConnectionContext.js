import { createContext, useState } from "react";

export const ConnectionContext = createContext();

export const ContextProvider = ({ children }) => {
  const [account, setAccount] = useState(null);

  return (
    <ConnectionContext.Provider value={{ account, setAccount }}>
      {children}
    </ConnectionContext.Provider>
  );
};

export default ConnectionContext;

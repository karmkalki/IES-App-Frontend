import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const DBProvider = ({ children }) => {
  const [DBData, setDBData] = useState(null);

  return (
    <UserContext.Provider value={{ DBData:DBData, setDBData:setDBData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
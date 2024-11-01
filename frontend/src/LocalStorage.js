import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [questions, setQuestions] = useState([]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        questions,
        setQuestions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

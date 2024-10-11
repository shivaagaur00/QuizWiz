// AppContext.js
import React, { createContext, useContext, useState } from "react";

// Create a Context
const AppContext = createContext();

// Create a Provider component
export const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    college: "",
    degree: "",
    collegeRollNo: "",
    branch: "",
  });

  const [user, setUser] = useState();
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

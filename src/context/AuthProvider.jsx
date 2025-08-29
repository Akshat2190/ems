import { useState, createContext, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage.jsx";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { EMPLOYEES, ADMIN } = getLocalStorage();
    setUserData({ EMPLOYEES, ADMIN });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

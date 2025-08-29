import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null); // stores role
  const [loggedInUserData, setLoggedInUserData] = useState(null); // stores full user object
  const authData = useContext(AuthContext);

  // Load user from localStorage on app start
  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser.role);
        setLoggedInUserData(parsedUser);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      const adminUser = { role: "admin" };
      setUser("admin");
      setLoggedInUserData(adminUser);
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
    } else {
      const employees =
        authData?.EMPLOYEES ??
        JSON.parse(localStorage.getItem("EMPLOYEES") || "[]");
      const employee = employees?.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        const employeeUser = { ...employee, role: "Employee" };
        setUser("Employee");
        setLoggedInUserData(employeeUser);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeUser));
      } else {
        alert("Invalid credentials");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUserData(null);
    setUser(null);
  };

  // Run once for localStorage setup
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard data={authData?.ADMIN?.[0]} onLogout={handleLogout} />
      ) : user === "Employee" ? (
        <EmployeeDashboard data={loggedInUserData} onLogout={handleLogout} />
      ) : null}
    </>
  );
};

export default App;

import { useState } from "react";
import UserContext from "../../contexts/UserContext";

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem("user"));

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify({email: userData.email, accessToken: userData.accessToken, _id: userData._id}));
  };

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user");
    setIsAuthenticated(false)
};

  return (
    <UserContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
}

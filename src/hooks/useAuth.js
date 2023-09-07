import { useState } from "react";

export const useAuth = () => {
  // Get user data from local storage when the app starts
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser || null);

  // Register a new user
  const register = (userData) => {
    // Save user data to local storage
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // Login a user
  const login = (userData) => {
    // Save user data to local storage
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // Logout a user
  const logout = () => {
    // Clear user data from local storage
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, register, login, logout };
};

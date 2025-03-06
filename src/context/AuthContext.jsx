// Authentication Context - Handles user login and logout
// - Stores authentication state in localStorage
// - Provides login and logout functions

import React, { createContext, useState } from "react";

// Create authentication context
export const AuthContext = createContext();

function AuthProvider({ children }) {
  // Check if user is already authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  // Function to log in the user
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("auth", "true");
  };

  // Function to log out the user
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
  };

  return (
    // Provide authentication state and functions to child components
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

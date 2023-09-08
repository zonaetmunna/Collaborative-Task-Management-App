import { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth"; // Adjust the path as needed

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Wrap children in curly braces
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const {
    user,
    register: registerUser,
    login,
    logout,
    updateProfile,
    createTeam,
    joinTeam,
    leaveTeam,
    teams,
  } = useContext(AuthContext);
  return {
    user,
    registerUser,
    login,
    logout,
    updateProfile,
    createTeam,
    joinTeam,
    leaveTeam,
    teams,
  }; // Renamed 'register' to 'registerUser'
}

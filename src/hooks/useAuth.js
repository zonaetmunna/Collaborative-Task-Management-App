import { useState } from "react";

export const useAuth = () => {
  // Get user data from local storage when the app starts
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedTeams = JSON.parse(localStorage.getItem("teams")) || [];
  const storedUsers = JSON.parse(localStorage.getItem("users")) || []; // Added line
  //   state isLoading and isSuccess states
  const [user, setUser] = useState(storedUser || null);
  const [teams, setTeams] = useState(storedTeams);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [users, setUsers] = useState(storedUsers);

  // Register a new user
  const register = (userData) => {
    setIsLoading(true);
    // Simulate an async operation (e.g., API call) with setTimeout
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      localStorage.setItem("users", JSON.stringify([...users, userData]));
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000); // Simulate a 1-second delay
  };

  // Login a user
  const login = (userData) => {
    setIsLoading(true);
    // Simulate an async operation (e.g., API call) with setTimeout
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      localStorage.setItem("users", JSON.stringify([...users, userData]));

      setIsLoading(false);
      setIsSuccess(true);
    }, 1000); // Simulate a 1-second delay
  };

  // Logout a user
  const logout = () => {
    setIsLoading(true);
    // Simulate an async operation (e.g., API call) with setTimeout
    setTimeout(() => {
      localStorage.removeItem("user");
      setUser(null);
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000); // Simulate a 1-second delay
  };

  // Update the user's profile
  const updateProfile = (updatedUserData) => {
    setIsLoading(true);
    // Simulate an async operation (e.g., API call) with setTimeout
    setTimeout(() => {
      const updatedUser = { ...user, ...updatedUserData };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000); // Simulate a 1-second delay
  };

  //   show all users form users
  const getAllUsers = () => {
    // setUsers();
  };

  // Create a new team
  const createTeam = (teamData) => {
    setIsLoading(true);
    // Simulate an async operation (e.g., API call) with setTimeout
    setTimeout(() => {
      const teamId = Date.now().toString();
      const newTeam = { id: teamId, ...teamData, members: [user] };
      const updatedTeams = [...teams, newTeam];
      localStorage.setItem("teams", JSON.stringify(updatedTeams));
      setTeams(updatedTeams);
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000); // Simulate a 1-second delay
  };

  // Join a team
  const joinTeam = (teamId) => {
    setIsLoading(true);
    // Simulate an async operation (e.g., API call) with setTimeout
    setTimeout(() => {
      const teamToJoin = teams.find((team) => team.id === teamId);
      if (teamToJoin && !teamToJoin.members.includes(user)) {
        teamToJoin.members.push(user);
        const updatedTeams = [...teams];
        localStorage.setItem("teams", JSON.stringify(updatedTeams));
        setTeams(updatedTeams);
      }
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000); // Simulate a 1-second delay
  };

  const leaveTeam = (teamId) => {
    setIsLoading(true);
    // Simulate an async operation (e.g., API call) with setTimeout
    setTimeout(() => {
      const teamToLeave = teams.find((team) => team.id === teamId);
      if (teamToLeave && teamToLeave.members.includes(user)) {
        teamToLeave.members = teamToLeave.members.filter(
          (member) => member !== user
        );
        const updatedTeams = [...teams];
        localStorage.setItem("teams", JSON.stringify(updatedTeams));
        setTeams(updatedTeams);
      }
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000); // Simulate a 1-second delay
  };

  return {
    user,
    users,
    isLoading,
    isSuccess,
    register,
    login,
    logout,
    updateProfile,
    createTeam,
    joinTeam,
    leaveTeam,
    teams,
    getAllUsers,
  };
};

import { useState } from "react";

export const useAuth = () => {
  // Get user data from local storage when the app starts
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedTeams = JSON.parse(localStorage.getItem("teams")) || [];
  const [user, setUser] = useState(storedUser || null);
  const [teams, setTeams] = useState(storedTeams);

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

  // Update the user's profile
  const updateProfile = (updatedUserData) => {
    // Merge the updated data with the current user data
    const updatedUser = { ...user, ...updatedUserData };

    // Update the user data in local storage
    localStorage.setItem("user", JSON.stringify(updatedUser));

    // Update the user state
    setUser(updatedUser);
  };

  // Create a new team
  const createTeam = (teamData) => {
    // Generate a unique team ID
    const teamId = Date.now().toString();

    // Create the new team object
    const newTeam = { id: teamId, ...teamData, members: [user] };

    // Update the teams data in local storage
    const updatedTeams = [...teams, newTeam];
    localStorage.setItem("teams", JSON.stringify(updatedTeams));

    // Update the teams state
    setTeams(updatedTeams);

    // Return the created team object
    return newTeam;
  };

  // Join a team
  const joinTeam = (teamId) => {
    // Find the team by ID
    const teamToJoin = teams.find((team) => team.id === teamId);

    // Check if the user is already a member
    if (teamToJoin && !teamToJoin.members.includes(user)) {
      // Add the user to the team's members
      teamToJoin.members.push(user);

      // Update the teams data in local storage
      const updatedTeams = [...teams];
      localStorage.setItem("teams", JSON.stringify(updatedTeams));

      // Update the teams state
      setTeams(updatedTeams);
    }
  };

  // Leave a team
  const leaveTeam = (teamId) => {
    // Find the team by ID
    const teamToLeave = teams.find((team) => team.id === teamId);

    // Check if the user is a member of the team
    if (teamToLeave && teamToLeave.members.includes(user)) {
      // Remove the user from the team's members
      teamToLeave.members = teamToLeave.members.filter(
        (member) => member !== user
      );

      // Update the teams data in local storage
      const updatedTeams = [...teams];
      localStorage.setItem("teams", JSON.stringify(updatedTeams));

      // Update the teams state
      setTeams(updatedTeams);
    }
  };

  return {
    user,
    register,
    login,
    logout,
    updateProfile,
    createTeam,
    joinTeam,
    leaveTeam,
    teams,
  };
};

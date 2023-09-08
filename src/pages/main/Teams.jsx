import React from "react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";

const Teams = () => {
  const { user, teams, createTeam, joinTeam, leaveTeam } = useAuthContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitCreateTeam = (data) => {
    createTeam({ name: data.teamName });
    reset();
  };

  const onSubmitJoinTeam = (data) => {
    joinTeam(data.team);
    reset();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Create or Join a Team</h1>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Create a Team</h2>
        <form onSubmit={handleSubmit(onSubmitCreateTeam)}>
          <div className="flex">
            <input
              type="text"
              placeholder="Team Name"
              {...register("teamName", { required: true })}
              className="mr-2 px-2 py-1 border rounded-md w-1/2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-1 rounded-md"
            >
              Create
            </button>
          </div>
          {errors.teamName && (
            <p className="text-red-500">Team Name is required.</p>
          )}
        </form>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Join a Team</h2>
        <form onSubmit={handleSubmit(onSubmitJoinTeam)}>
          <div className="flex">
            <select
              {...register("team", { required: true })}
              className="mr-2 px-2 py-1 border rounded-md w-1/2"
            >
              <option value="" disabled>
                Select a Team
              </option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-1 rounded-md"
            >
              Join
            </button>
          </div>
          {errors.team && <p className="text-red-500">Select a Team.</p>}
        </form>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Your Teams</h2>
        <ul>
          {user &&
            teams.map((team) => (
              <li key={team.id} className="mb-2">
                <span className="mr-2">{team.name}</span>
                <button
                  onClick={() => leaveTeam(team.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                >
                  Leave
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Teams;

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Select from "react-select"; // Import React-Select
import { useAuthContext } from "../../context/AuthContext";

const Teams = () => {
  const { user, teams, createTeam, joinTeam, leaveTeam, users } =
    useAuthContext();
  const [selectedTeam, setSelectedTeam] = useState(null);
  const selectOptions = users.map((user) => ({
    value: user.gmail,
    label: user.email,
  }));
  const [selectedMembers, setSelectedMembers] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitCreateTeam = async (data) => {
    try {
      // Create a new team with the creator and selected members
      const newTeam = await createTeam({
        name: data.teamName,
        members: [
          user.data.gmail,
          ...selectedMembers.map((member) => member.value),
        ],
      });
      reset();
      toast.success("Team created successfully");
      setSelectedTeam(newTeam);
    } catch (error) {
      toast.error("Failed to create team");
    }
  };

  /* const onSubmitJoinTeam = async (data) => {
    try {
      await joinTeam(data.team);
      reset();
      toast.success("You joined the team successfully");
      setSelectedTeam(data.team);
    } catch (error) {
      toast.error("Failed to join the team");
    }
  }; */

  const handleLeaveTeam = async () => {
    try {
      await leaveTeam(selectedTeam.id);
      setSelectedTeam(null);
      toast.success("Left the team successfully");
    } catch (error) {
      toast.error("Failed to leave the team");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Create or Join a Team</h1>
      {!selectedTeam && (
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
              {/* Create a multi-select dropdown for selecting team members */}
              <Select
                options={selectOptions}
                isMulti // Enable multiple selection
                className=""
                value={selectedMembers}
                onChange={(selected) => setSelectedMembers(selected)}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-1 rounded-md"
              >
                Create Team
              </button>
            </div>
            {errors.teamName && (
              <p className="text-red-500">Team Name is required.</p>
            )}
          </form>
        </div>
      )}

      {/* {!selectedTeam && (
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
      )} */}

      {selectedTeam && (
        <div>
          <h2 className="text-lg font-semibold mb-2">
            Your Team: {selectedTeam.name}
          </h2>
          <button
            onClick={handleLeaveTeam}
            className="bg-red-500 text-white px-2 py-1 rounded-md mb-2"
          >
            Leave Team
          </button>
          {/* Add tasks management for the selected team here */}
        </div>
      )}

      <div>
        <h2 className="text-lg font-semibold mb-2">Your Teams</h2>
        <ul>
          {user &&
            teams.map((team) => (
              <li key={team.id} className="mb-2">
                <span className="mr-2">{team.name}</span>
                {!selectedTeam && (
                  <button
                    onClick={() => setSelectedTeam(team)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md"
                  >
                    Select
                  </button>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Teams;

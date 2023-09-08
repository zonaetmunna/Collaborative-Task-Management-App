import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const { user, updateProfile } = useAuthContext();

  const onSubmit = async (data) => {
    try {
      // Assuming 'data' contains the updated profile information
      await updateProfile(data);

      // Handle successful update, e.g., show a success message
      toast.success("Profile updated successfully");
    } catch (error) {
      // Handle any errors that occur during the update process
      toast.error("Error updating profile");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">{user.data.email}</h2>
      {/* image */}
      <img src={user.profilePicture} alt="logo" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-600 font-medium mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}
            defaultValue={user.username}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block text-gray-600 font-medium mb-2">
            Bio
          </label>
          <input
            type="text"
            id="bio"
            {...register("bio")}
            defaultValue={user.bio}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="profilePicture"
            className="block text-gray-600 font-medium mb-2"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            {...register("profilePicture")}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Profile;

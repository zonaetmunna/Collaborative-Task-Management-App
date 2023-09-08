import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user, updateProfile } = useAuthContext();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: user.data.email,
    },
  });

  const onSubmit = async (data) => {
    try {
      // Assuming 'data' contains the updated profile information
      const updateData = {
        username: data.username,
        profilePicture: data.profilePicture,
        email: data.email,
        bio: data.bio,
      };
      await updateProfile({ ...user, ...updateData });

      // Handle successful update, e.g., show a success message
      toast.success("Profile updated successfully");
    } catch (error) {
      // Handle any errors that occur during the update process
      toast.error("Error updating profile");
    }
  };

  return (
    <div className="flex bg-gray-100 ">
      {/* Sidebar */}
      <aside className=" w-1/4 bg-white p-6 rounded shadow-md">
        <div className="text-center mb-4">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="rounded-full w-24 h-24 mx-auto mb-2"
          />
          <h2 className="text-xl font-semibold">{user.username}</h2>
          <p>{user.data.email}</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* username */}
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
            {/* email disabled */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                disabled
                defaultValue={user.email}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bio"
                className="block text-gray-600 font-medium mb-2"
              >
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
      </main>
    </div>
  );
};

export default Profile;

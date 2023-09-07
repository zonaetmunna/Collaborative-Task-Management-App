import React from "react";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle profile update
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("username")}
          defaultValue={user.username}
        />
        <input type="text" {...register("bio")} defaultValue={user.bio} />
        <input type="file" {...register("profilePicture")} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;

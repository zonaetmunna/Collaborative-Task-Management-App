import { useForm } from "react-hook-form";
import toast from "react-hot-toast"; // Import react-hot-toast
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const { registerUser } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Assuming registerUser is your registration function
      await registerUser(data);

      // Check for a successful registration (you might need to adjust this condition)

      // Show a success toast
      toast.success("Registration successful!"); // Show a success toast
      reset();
      navigate("/");
      // Handle the response or perform any necessary actions
    } catch (error) {
      // Show an error toast if an exception occurs
      toast.error("An error occurred during registration."); // Show an error toast
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              className={`w-full mt-1 p-2 border rounded ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Your password"
              className={`w-full mt-1 p-2 border rounded ${
                errors.password ? "border-red-500" : ""
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
        {/* go to login */}
        <p className="mt-4">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

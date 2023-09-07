import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuthContext();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Handle login logic here with data.email and data.password
    login({ data });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full mt-1 p-2 border rounded"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                Please enter a valid email address.
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
              className="w-full mt-1 p-2 border rounded"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">Password is required.</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

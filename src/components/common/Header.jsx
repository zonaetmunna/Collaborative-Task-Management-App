import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuthContext();

  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="text-white">
            Task Manager
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            {user ? (
              <>
                <li>
                  <Link to="/" className="hover:underline">
                    Tasks
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:underline">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="hover:underline">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="hover:underline">
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition duration-300 ease-in-out"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:underline">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

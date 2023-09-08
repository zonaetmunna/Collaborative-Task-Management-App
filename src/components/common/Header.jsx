import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuthContext();

  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          <Link to="/">Task Manager</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            {user ? (
              <>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
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

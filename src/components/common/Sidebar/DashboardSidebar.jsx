// DashboardSidebar.js
import {
  FaChartBar,
  FaClipboardCheck,
  FaSignOutAlt,
  FaUser,
  FaUserFriends,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

const DashboardSidebar = () => {
  const { logout } = useAuthContext();
  const signOut = () => {
    logout();
  };
  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Menu</h2>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-4">
            <Link to="/dashboard" className="flex items-center">
              <FaChartBar className="w-5 h-5 mr-2" /> Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/team" className="flex items-center">
              <FaUserFriends className="w-5 h-5 mr-2" /> Teams
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/task" className="flex items-center">
              <FaClipboardCheck className="w-5 h-5 mr-2" /> Tasks
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/profile" className="flex items-center">
              <FaUser className="w-5 h-5 mr-2" /> Profile
            </Link>
          </li>
          <li>
            <button onClick={signOut} className="flex items-center">
              <FaSignOutAlt className="w-5 h-5 mr-2" /> Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;

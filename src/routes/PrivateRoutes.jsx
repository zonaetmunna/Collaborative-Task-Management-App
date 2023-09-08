import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Spinner/Loading";
import { useAuthContext } from "../context/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { pathname } = useLocation();

  const { user, isLoading } = useAuthContext();

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !user?.data?.email) {
    return (
      <Navigate to="/login" state={{ path: pathname.includes("/login") }} />
    );
  }

  return children;
};

export default PrivateRoutes;

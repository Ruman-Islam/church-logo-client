import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../services/hook";
import Loader from "./../components/common/Loader";

const RequireAuth = () => {
  const [loading, setLoading] = useState(true);
  const {
    auth: { user },
  } = useAppSelector((state) => state);
  const location = useLocation();

  useEffect(() => {
    // Assume that if user is null, we are still loading
    if (user === null || user === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <Loader />; // Replace with your own loading spinner or component
  }

  return user?.userId ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;

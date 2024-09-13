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
    setLoading(false);
  }, [user]);

  if (loading) {
    return <Loader />;
  }

  return user?.userId ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;

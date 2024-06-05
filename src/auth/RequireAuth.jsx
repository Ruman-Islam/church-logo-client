import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../services/hook";

const RequireAuth = () => {
  const {
    auth: { user },
  } = useAppSelector((state) => state);
  const location = useLocation();

  return user?.userId ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;

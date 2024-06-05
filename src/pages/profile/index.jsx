import MuiIButton from "../../components/UI/MuiButton";
import Layout from "../../components/common/Layout";
import useCookie from "../../hooks/useCookie";
import { logOut } from "../../services/features/auth/authSlice.js";
import { useAppDispatch, useAppSelector } from "../../services/hook";

export default function ProfileScreen() {
  const {
    auth: { user },
  } = useAppSelector((state) => state);
  const { handleRemoveCookie } = useCookie();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    handleRemoveCookie();
  };

  return (
    <Layout title="Profile">
      <section id="profile">
        <div className="container px-2">
          <h1>Hello, {user.firstName}</h1>
          <MuiIButton onClick={handleLogout} variant="outlined">
            Sign out
          </MuiIButton>
        </div>
      </section>
    </Layout>
  );
}

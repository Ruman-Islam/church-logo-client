import { HashLink } from "react-router-hash-link";
import MuiIButton from "../../../components/UI/MuiButton";
import useCookie from "../../../hooks/useCookie";
import { logOut } from "../../../services/features/auth/authSlice.js";
import { useAppDispatch } from "../../../services/hook";

export default function AccountSidebar() {
  const { handleRemoveCookie } = useCookie();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    handleRemoveCookie();
  };

  return (
    <div className="max-w-[230px] w-full border border-blue-500">
      <ul>
        <li>
          <HashLink to="/profile">Profile</HashLink>
        </li>
        <li>
          <HashLink to="/profile/account-setting">Account Settings</HashLink>
        </li>
        <li>
          <HashLink to="/">My Orders</HashLink>
        </li>
        <li>
          <HashLink to="/profile/chat">Chat</HashLink>
        </li>
        <MuiIButton onClick={handleLogout} variant="outlined">
          Sign out
        </MuiIButton>
      </ul>
    </div>
  );
}

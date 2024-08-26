import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Logout from "@mui/icons-material/Logout";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MuiIButton from "../../components/UI/MuiButton";
import { default as navItems } from "../../data/navigation.json";
import useCookie from "../../hooks/useCookie";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import { logOut } from "../../services/features/auth/authSlice.js";
import { useAppDispatch, useAppSelector } from "../../services/hook";

const menuPaperProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

const MenuItems = ({ onModalOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const {
    auth: { user },
  } = useAppSelector((state) => state);
  const scrollWithOffset = useScrollWithOffset();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const { handleRemoveCookie } = useCookie();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    handleRemoveCookie();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNav = (route) => {
    navigate(`/${route}`);
  };

  return (
    <>
      {navItems.map(({ id, title, route, match }) => {
        if (title === "Order Yours") {
          return (
            <li
              key={id}
              className="duration-300 bg-primary hover:bg-brand__black__color rounded-none lg:rounded-full text-white"
            >
              <HashLink
                className="px-4 py-3 lg:py-1.5 w-full inline-block"
                to={route}
                scroll={(el) => scrollWithOffset(el, 135)}
              >
                {title}
              </HashLink>
            </li>
          );
        }

        if (user && title === "Notification") {
          return (
            <li
              key={id}
              className="py-2 border-b lg:border-0 hover:bg-gray-200 lg:hover:bg-transparent hover:text-primary duration-300"
            >
              <IconButton size="small">
                <Badge
                  color="primary"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                >
                  <MarkEmailUnreadIcon />
                </Badge>
              </IconButton>
            </li>
          );
        }

        if (user && title === "Profile") {
          return (
            <li
              key={id}
              className="px-2 lg:px-0 py-2 hover:bg-gray-200 lg:hover:bg-transparent hover:text-primary duration-300"
            >
              <IconButton onClick={handleClick} size="small">
                <Avatar
                  alt={user?.firstName}
                  src={user?.photo?.url || "/static/images/avatar/1.jpg"}
                  sx={{ backgroundColor: "#FF5722" }}
                  className="w-8 h-8"
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={menuPaperProps}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={() => handleNav("dashboard")}>
                  <ListItemIcon>
                    <DashboardIcon fontSize="small" />
                  </ListItemIcon>
                  Dashboard
                </MenuItem>
                <MenuItem onClick={() => handleNav("profile")}>
                  <ListItemIcon>
                    <AccountBoxIcon fontSize="small" />
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem onClick={() => handleNav("account-settings")}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Account Settings
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </li>
          );
        }

        if (!user && title === "Sign In") {
          return (
            <li
              key={id}
              className=" lg:border-0 hover:bg-gray-200 lg:hover:bg-transparent duration-300 rounded-none lg:rounded-full"
            >
              <MuiIButton
                className="text-brand__black__color font-brand__font__600 hover:text-primary duration-300 py-3 lg:py-1.5 w-full text-start"
                onClick={onModalOpen}
                style={{ justifyContent: "flex-start" }}
              >
                {title}
              </MuiIButton>
            </li>
          );
        }

        if (
          title !== "Sign In" &&
          title !== "Notification" &&
          title !== "Profile" &&
          title !== "Order Yours"
        ) {
          return (
            <li
              key={id}
              className={`${
                pathname.includes(match)
                  ? "text-primary"
                  : "text-brand__black__color"
              } border-b lg:border-0 hover:bg-gray-200 lg:hover:bg-transparent hover:text-primary duration-300`}
            >
              <HashLink
                className="px-2.5 lg:px-0 py-3 lg:py-1.5 w-full inline-block"
                to={route}
                scroll={(el) => scrollWithOffset(el, 135)}
              >
                {title}
              </HashLink>
            </li>
          );
        }
      })}
    </>
  );
};

export default MenuItems;

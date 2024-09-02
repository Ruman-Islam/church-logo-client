import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Logout from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MuiIButton from "../../components/UI/MuiButton";
import { default as navItems } from "../../data/navigation.json";
import useCookie from "../../hooks/useCookie";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import { api } from "../../services/api/apiSlice";
import { logOut } from "../../services/features/auth/authSlice.js";
import { useAppDispatch } from "../../services/hook";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

const MenuItems = ({ onModalOpen, user }) => {
  const scrollWithOffset = useScrollWithOffset();

  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const { handleRemoveCookie } = useCookie();
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleLogout = () => {
    dispatch(api.util.resetApiState());
    dispatch(logOut());
    handleRemoveCookie();
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
              <IconButton
                onClick={(e) => setAnchorEl2(e.currentTarget)}
                size="small"
              >
                <Badge
                  color="primary"
                  overlap="circular"
                  badgeContent=" "
                  variant="dot"
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <StyledMenu
                anchorEl={anchorEl2}
                open={open2}
                onClose={() => setAnchorEl2(null)}
                slotProps={{
                  paper: {
                    style: {
                      maxHeight: ITEM_HEIGHT * 8.5,
                      width: "50ch",
                    },
                  },
                }}
              >
                <List
                  sx={{
                    width: "100%",
                  }}
                >
                  <ListSubheader className="border-b">
                    <Typography variant="overline">
                      Notification center
                    </Typography>
                  </ListSubheader>
                  {options.map((option) => (
                    <ListItem className="border-b" key={option}>
                      <ListItemAvatar>
                        <Avatar
                          alt={option}
                          src="/static/images/avatar/3.jpg"
                        />
                      </ListItemAvatar>
                      {option}
                    </ListItem>
                  ))}
                </List>
              </StyledMenu>
            </li>
          );
        }

        if (user && title === "Profile") {
          return (
            <li
              key={id}
              className="px-2 lg:px-0 py-2 hover:bg-gray-200 lg:hover:bg-transparent hover:text-primary duration-300"
            >
              <IconButton
                onClick={(e) => setAnchorEl(e.currentTarget)}
                size="small"
              >
                <Avatar
                  alt={user?.firstName}
                  src={user?.photo?.url}
                  sx={{ backgroundColor: "#FF5722" }}
                  className="w-8 h-8 border border-brand__black__color"
                />
              </IconButton>
              <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => handleNav("dashboard#dashboard")}>
                  <ListItemIcon>
                    <DashboardIcon fontSize="small" />
                  </ListItemIcon>
                  Dashboard
                </MenuItem>
                <MenuItem onClick={() => handleNav("profile#profile")}>
                  <ListItemIcon>
                    <AccountBoxIcon fontSize="small" />
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => handleNav("account-settings#account-settings")}
                >
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
              </StyledMenu>
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

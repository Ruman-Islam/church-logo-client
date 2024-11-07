import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Logout from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import { api } from "../../services/api/apiSlice";
import { logOut } from "../../services/features/auth/authSlice.js";
import { useAppDispatch } from "../../services/hook";
import { socket } from "../../socket";

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

// const options = [
//   "None",
//   "Atria",
//   "Callisto",
//   "Dione",
//   "Ganymede",
//   "Hangouts Call",
//   "Luna",
//   "Oberon",
//   "Phobos",
//   "Pyxis",
//   "Sedna",
//   "Titania",
//   "Triton",
//   "Umbriel",
// ];

const MenuItems = ({
  onModalOpen,
  user,
  unreadMessages,
  orderUnreadMessages,
}) => {
  const scrollWithOffset = useScrollWithOffset();

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleLogout = () => {
    socket.emit("disconnection");
    dispatch(api.util.resetApiState());
    dispatch(logOut());
    localStorage.removeItem("auth");
    navigate("/");
  };

  const getFilteredUnreadMessages = (messages, idKey) => [
    ...messages
      .slice()
      .reverse()
      .reduce((acc, item) => {
        const conversationId = item?.[idKey]?._id;

        if (acc.has(conversationId)) {
          acc.get(conversationId).count += 1;
        } else {
          acc.set(conversationId, { ...item, count: 1 });
        }

        return acc;
      }, new Map())
      .values(),
  ];

  const filteredUnreadMessages = getFilteredUnreadMessages(
    unreadMessages,
    "conversationId"
  );
  const filteredOrderUnreadMessages = getFilteredUnreadMessages(
    orderUnreadMessages,
    "conversation"
  );

  const finalUnreadMessages = [
    ...filteredUnreadMessages,
    ...filteredOrderUnreadMessages,
  ];

  finalUnreadMessages.sort(
    (a, b) => new Date(b?.dateTime) - new Date(a?.dateTime)
  );

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
                sx={{ p: 0, color: "primary.main" }}
                className="p-2 lg:p-0"
              >
                <Badge
                  color="error"
                  overlap="circular"
                  badgeContent={
                    unreadMessages?.length + orderUnreadMessages?.length
                  }
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
                      width: "50ch",
                    },
                  },
                }}
              >
                <List
                  sx={{
                    width: "100%",
                    p: 0,
                    m: 0,
                  }}
                >
                  <ListSubheader className="px-4 shadow-sm" sx={{ p: 0, m: 0 }}>
                    <Typography
                      variant="overline"
                      sx={{ p: 0, m: 0 }}
                      className="text-brand__font__size__xs"
                    >
                      Notification center
                    </Typography>
                  </ListSubheader>
                  <Box className="max-h-[250px] h-fit overflow-y-auto bg-white custom-scrollbar">
                    {finalUnreadMessages?.map((item) => {
                      const isClientType = item.messageType === "client";

                      const url = isClientType
                        ? `/dashboard/inbox/${item?.conversationId?._id}#chat`
                        : `/order/order-activities/${item?.order?._id}`;

                      return (
                        <HashLink
                          key={item?._id}
                          scroll={(el) => scrollWithOffset(el, 130)}
                          to={url}
                          onClick={() => setAnchorEl2(null)}
                        >
                          <ListItem className="border-t hover:bg-section__bg_color flex justify-between gap-x-2 py-3">
                            <Box className="basis-[5%] flex items-center text-brand__black__color text-brand__font__size__md">
                              {isClientType ? (
                                <Avatar
                                  variant="round"
                                  src={item?.sender?.photo?.url}
                                />
                              ) : (
                                <Avatar
                                  variant="round"
                                  alt={item?.package?.title}
                                  src={item?.package?.thumbnail1}
                                  sx={{ backgroundColor: "#FF5722" }}
                                />
                              )}
                            </Box>
                            <Box className="flex-grow pr-2">
                              <ListItemText
                                primaryTypographyProps={{ fontSize: "12px" }}
                                primary={
                                  <span className="flex justify-between items-center">
                                    <span className="text-brand__font__size__sm">
                                      <span className="font-brand__font__semibold">
                                        {isClientType
                                          ? `${item?.sender?.firstName} ${item?.sender?.lastName}`
                                          : item?.package?.title?.length > 20
                                          ? item?.package?.title?.slice(0, 20) +
                                            "..."
                                          : item?.package?.title}
                                      </span>
                                      {": "}
                                      <span>
                                        {item?.text?.length > 20
                                          ? item?.text?.slice(0, 20) +
                                            " " +
                                            "..."
                                          : item?.text}
                                      </span>
                                    </span>
                                    {item.count > 0 && (
                                      <Badge
                                        color="error"
                                        sx={{
                                          "& .MuiBadge-badge": {
                                            fontSize: 9,
                                            height: 15,
                                            minWidth: 15,
                                          },
                                        }}
                                        badgeContent={item?.count}
                                        showZero
                                      ></Badge>
                                    )}
                                  </span>
                                }
                              />
                            </Box>
                          </ListItem>
                        </HashLink>
                      );
                    })}

                    {/* {options.map((option) => (
                      <ListItem
                        className="border-t text-brand__font__size__sm hover:bg-section__bg_color flex justify-between gap-x-2"
                        key={option}
                      >
                        <Box className="basis-[5%] flex items-center">
                          <NotificationsOutlinedIcon />
                        </Box>
                        <Box className="flex-grow">
                          <ListItemText
                            primaryTypographyProps={{ fontSize: "14px" }}
                            primary={option}
                          />
                        </Box>
                      </ListItem>
                    ))} */}
                  </Box>
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
                sx={{ p: 0 }}
              >
                <Avatar
                  alt={user?.firstName}
                  src={user?.photo?.url}
                  sx={{ backgroundColor: "#FF5722" }}
                  className="w-8 h-8 border border-text__gray"
                />
              </IconButton>
              <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem>
                  <HashLink
                    to="/dashboard"
                    className="flex items-center"
                    scroll={(el) => scrollWithOffset(el, 135)}
                    onClick={() => setAnchorEl(null)}
                  >
                    <ListItemIcon>
                      <DashboardIcon fontSize="small" />
                    </ListItemIcon>
                    Dashboard
                  </HashLink>
                </MenuItem>
                <MenuItem>
                  <HashLink
                    to="/profile#profile"
                    className="flex items-center"
                    scroll={(el) => scrollWithOffset(el, 135)}
                  >
                    <ListItemIcon>
                      <AccountBoxIcon fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </HashLink>
                </MenuItem>
                <MenuItem>
                  <HashLink
                    to="/account-settings#account-settings"
                    className="flex items-center"
                    scroll={(el) => scrollWithOffset(el, 135)}
                  >
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Account Settings
                  </HashLink>
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

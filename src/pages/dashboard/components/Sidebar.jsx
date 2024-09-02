import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import { HashLink } from "react-router-hash-link";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import checkIsOnline from "../../../utils/checkIsOnline";

export default function Sidebar({
  user,
  inbox = [],
  orders = [],
  onlineUsers = [],
}) {
  const scrollWithOffset = useScrollWithOffset();

  const activeOrders = orders.filter(
    (item) => item?.orderStatus === "in progress"
  );
  const revisionOrders = orders.filter(
    (item) => item?.orderStatus === "revision"
  );
  const completedOrders = orders.filter(
    (item) => item?.orderStatus === "completed"
  );

  return (
    <Box className="lg:max-w-[250px] w-full flex flex-col gap-5">
      <Box className="border bg-white text-text__gray p-5">
        <Box className="flex items-center gap-2">
          <Box className="flex justify-between items-center w-[50px] h-[50px] flex-col rounded-full">
            <Avatar
              alt={user?.firstName}
              src={user?.photo?.url || "/static/images/avatar/1.jpg"}
              sx={{ backgroundColor: "#FF5722" }}
              className="w-full h-full text-brand__font__size__lg"
            />
          </Box>
          <Box className="flex flex-col text-brand__font__size__sm">
            <Typography variant="p" className="font-brand__font__semibold">
              {user?.firstName} {user?.lastName}
            </Typography>
            <Typography variant="p">ID: {user?.userId}</Typography>
          </Box>
        </Box>
        <Box className="flex justify-between py-2.5">
          <Typography variant="p">Status</Typography>
          <Typography variant="p">{user?.rank}</Typography>
        </Box>
        <Divider />
        <Box className="mt-2 text-brand__font__size__sm">
          <Box className="flex justify-between py-1">
            <Typography variant="p">Complete Order</Typography>
            <Typography variant="p">{completedOrders.length}</Typography>
          </Box>
          <Box className="flex justify-between py-1">
            <Typography variant="p">Pending Order</Typography>
            <Typography variant="p">{activeOrders.length}</Typography>
          </Box>
          <Box className="flex justify-between py-1">
            <Typography variant="p">Revision</Typography>
            <Typography variant="p">{revisionOrders.length}</Typography>
          </Box>
        </Box>
      </Box>

      <Box className="text-text__gray w-full">
        <Box className="border rounded-full bg-section__bg_color flex justify-between items-center">
          <Box className="px-6 py-1 rounded-full hover:cursor-default flex-1">
            <Typography variant="p"> Switch to</Typography>
          </Box>
          <Box className="bg-white rounded-full border-l flex-1">
            <HashLink className="px-10 py-1 inline-block" to="/profile#profile">
              <Typography variant="p">Profile</Typography>
            </HashLink>
          </Box>
        </Box>
      </Box>

      <Box className="border bg-white w-full">
        <List
          sx={{
            width: "100%",
            padding: 0,
          }}
          className="max-h-[350px] h-full overflow-y-auto"
        >
          <ListSubheader className="border-b">
            <Typography variant="caption">Inbox (1)</Typography>
          </ListSubheader>
          {inbox.map((item) => (
            <ListItem key={item?._id} alignItems="flex-start" className="p-0">
              <HashLink
                scroll={(el) => scrollWithOffset(el, 130)}
                to={`/dashboard/chat/${item?._id}#chat`}
                className="flex w-full p-3 hover:bg-section__bg_color duration-200"
              >
                <ListItemAvatar>
                  <Avatar
                    alt={item?.participant?.firstName}
                    src="/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "14px" }}
                  secondaryTypographyProps={{ fontSize: "12px" }}
                  primary={
                    <Box className="flex items-center gap-x-1">
                      <span>{item?.participant?.firstName}</span>
                      <Box
                        className={`w-2 h-2 rounded-full mb-0.5 ${
                          checkIsOnline(onlineUsers, item?.participant?.userId)
                            ? "bg-primary"
                            : "bg-text__gray"
                        }`}
                      ></Box>
                    </Box>
                  }
                  secondary={"I'll be in your neighborhood doing errands this…"}
                />
              </HashLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

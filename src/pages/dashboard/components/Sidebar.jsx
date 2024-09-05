import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { HashLink } from "react-router-hash-link";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import {
  useGetInboxQuery,
  useGetUnreadMessagesQuery,
} from "../../../services/features/chat/chatApi";
import { useGetOrderListQuery } from "../../../services/features/order/orderApi";
import { useAppSelector } from "../../../services/hook";
import checkIsOnline from "../../../utils/checkIsOnline";

function findOppositeParticipant(userObject, userId) {
  const { creator, participant } = userObject;

  if (creator.userId === userId) {
    return participant;
  } else if (participant.userId === userId) {
    return creator;
  } else {
    return null; // Return null or handle the case where neither ID matches
  }
}

export default function Sidebar() {
  const scrollWithOffset = useScrollWithOffset();

  const {
    auth: { user },
    chat: { onlineUsers },
  } = useAppSelector((state) => state);

  const query = {
    page: 1,
    limit: 100,
  };

  const { /* data: order,  */ isFetching: orderFetching } =
    useGetOrderListQuery(query);

  const { data: conversation, isFetching: conversationFetching } =
    useGetInboxQuery(query);

  const { data: unreadMessages, isFetching: UnreadMessagesFetching } =
    useGetUnreadMessagesQuery({
      refetchOnMountOrArgChange: true,
    });
  // console.log(messages)
  // const activeOrders = order?.data.filter(
  //   (item) => item?.orderStatus === "in progress"
  // );
  // const revisionOrders = order?.data.filter(
  //   (item) => item?.orderStatus === "revision"
  // );
  // const completedOrders = order?.data.filter(
  //   (item) => item?.orderStatus === "completed"
  // );

  if (orderFetching || conversationFetching || UnreadMessagesFetching) {
    return <Skeleton variant="square" className="w-[250px] h-[600px]" />;
  }

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
            <Typography variant="p">{0}</Typography>
          </Box>
          <Box className="flex justify-between py-1">
            <Typography variant="p">Pending Order</Typography>
            <Typography variant="p">{0}</Typography>
          </Box>
          <Box className="flex justify-between py-1">
            <Typography variant="p">Revision</Typography>
            <Typography variant="p">{0}</Typography>
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
            <Typography variant="caption">
              Inbox ({unreadMessages?.data?.length})
            </Typography>
          </ListSubheader>
          {conversation?.data?.docs.map((item) => {
            const participant = findOppositeParticipant(item, user?.userId);
            return (
              <ListItem key={item?._id} alignItems="flex-start" className="p-0">
                <HashLink
                  scroll={(el) => scrollWithOffset(el, 130)}
                  to={`/dashboard/inbox/${item?._id}#chat`}
                  className="flex w-full p-3 hover:bg-section__bg_color duration-200"
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={participant?.firstName}
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: "14px" }}
                    secondaryTypographyProps={{ fontSize: "12px" }}
                    primary={
                      <Box className="flex items-center gap-x-1">
                        <span>
                          {participant?.firstName} {participant?.lastName}
                        </span>
                        <Box
                          className={`w-2 h-2 rounded-full mb-0.5 ${
                            checkIsOnline(onlineUsers, participant?.userId)
                              ? "bg-primary"
                              : "bg-text__gray"
                          }`}
                        ></Box>
                      </Box>
                    }
                    secondary={
                      "I'll be in your neighborhood doing errands this…"
                    }
                  />
                </HashLink>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}

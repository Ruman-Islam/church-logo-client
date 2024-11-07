import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { useEffect, useRef } from "react";
import { CgAttachment } from "react-icons/cg";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import { useGetInboxQuery } from "../../../services/features/chat/chatApi";
import { useGetOrderCountQuery } from "../../../services/features/order/orderApi";
import { useAppSelector } from "../../../services/hook";
import checkIsOnline from "../../../utils/checkIsOnline";
import generatePhotoDownloadLink from "../../../utils/generatePhotoDownloadLink";

export default function Sidebar() {
  const scrollWithOffset = useScrollWithOffset();
  const { id } = useParams();

  const {
    auth: { user },
    chat: { adminsAndClientsOnlineList, unreadMessages, messages },
  } = useAppSelector((state) => state);

  const prevMessagesLength = useRef(messages.length);

  const query = {
    page: 1,
    limit: 1,
  };

  const { data: count } = useGetOrderCountQuery();

  const {
    data: conversation,
    isLoading: conversationFetching,
    refetch,
  } = useGetInboxQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (messages.length > prevMessagesLength.current) {
      // If the new length is greater, refetch the conversation
      refetch();
    }
    // Update the previous messages length
    prevMessagesLength.current = messages.length;
  }, [messages.length, refetch]);

  if (conversationFetching) {
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
            <Typography variant="p">{count?.data?.completed || 0}</Typography>
          </Box>
          <Box className="flex justify-between py-1">
            <Typography variant="p">Pending Order</Typography>
            <Typography variant="p">{count?.data?.progress || 0}</Typography>
          </Box>
          <Box className="flex justify-between py-1">
            <Typography variant="p">Revision</Typography>
            <Typography variant="p">{count?.data?.revision || 0}</Typography>
          </Box>
        </Box>
      </Box>

      <Box className="text-text__gray w-full">
        <Box className="border rounded-full bg-section__bg_color flex justify-between items-center">
          <Box className="px-6 py-1 rounded-full hover:cursor-default flex-1">
            <Typography variant="p"> Switch to</Typography>
          </Box>
          <Box className="bg-white rounded-full border-l flex-1">
            <HashLink
              className="px-10 py-1 inline-block"
              to="/profile#profile"
              scroll={(el) => scrollWithOffset(el, 130)}
            >
              <Typography variant="p">Profile</Typography>
            </HashLink>
          </Box>
        </Box>
      </Box>

      <List
        sx={{
          width: "100%",
          padding: 0,
        }}
        className="bg-white border h-fit"
      >
        <ListSubheader>
          <Typography variant="caption">
            Unread ({unreadMessages?.length})
          </Typography>
        </ListSubheader>
        <Box className="bg-white">
          {conversation?.data?.docs.map((item) => {
            const unreadMsgs = unreadMessages.filter(
              (msg) => msg?.conversationId?._id === item?._id
            );

            return (
              <Box
                key={item?._id}
                alignItems="flex-start"
                className="p-0 border-t flex flex-col"
              >
                <HashLink
                  scroll={(el) => scrollWithOffset(el, 130)}
                  to={`/dashboard/inbox/${item?._id}#chat`}
                  className="flex w-full p-3 hover:bg-section__bg_color duration-200 justify-between gap-x-2"
                >
                  <Box className="basis-[5%] flex items-center">
                    <Avatar
                      className="w-8 h-8 rounded-full text-brand__font__size__sm p-0 m-0"
                      alt={item?.participant?.firstName}
                      src={
                        item?.participant?.photo?.url ||
                        "/static/images/avatar/1.jpg"
                      }
                    />
                  </Box>
                  <Box className="flex-grow">
                    <ListItemText
                      primaryTypographyProps={{ fontSize: "14px" }}
                      secondaryTypographyProps={{ fontSize: "12px" }}
                      primary={
                        <span className="flex items-center gap-x-1 leading-tight">
                          <span>
                            {item?.participant?.firstName}{" "}
                            {item?.participant?.lastName}
                          </span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full mb-0.5 ${
                              checkIsOnline(adminsAndClientsOnlineList)
                                ? "bg-primary"
                                : "bg-text__gray"
                            }`}
                          ></span>
                        </span>
                      }
                      secondary={
                        <span className="flex justify-between gap-x-1 mt-1 leading-tight">
                          <span className="basis-[90%] w-full flex gap-x-2">
                            <span className="flex items-center">
                              <span className="font-brand__font__semibold mr-1">
                                {item?.lastMessage?.senderDetails?.userId ===
                                  user?.userId &&
                                  item?.lastMessage?.text !== "No messages" &&
                                  "You: "}
                              </span>
                              {item?.lastMessage?.attachment?.length > 0 ? (
                                <span className="flex items-center gap-x-0.5 ml-0.5">
                                  <CgAttachment size={13} />{" "}
                                  <span>attachment</span>
                                </span>
                              ) : item?.lastMessage?.text?.length > 18 ? (
                                <span>
                                  {item?.lastMessage?.text?.slice(0, 18) +
                                    " " +
                                    "..."}
                                </span>
                              ) : (
                                <span>{item?.lastMessage?.text}</span>
                              )}
                            </span>
                          </span>
                          {unreadMsgs?.length > 0 && (
                            <span
                              className={`w-3.5 h-3.5 rounded-full flex items-center justify-center bg-error text-white text-[8px]`}
                            >
                              {unreadMsgs?.length}
                            </span>
                          )}
                        </span>
                      }
                    />
                  </Box>
                </HashLink>
                {id && (
                  <>
                    <ListSubheader className="border-t w-full">
                      <Typography variant="caption">
                        Attachments ({item?.attachments?.length})
                      </Typography>
                    </ListSubheader>
                    <PhotoProvider>
                      <Box className="flex flex-wrap gap-1 px-4 max-h-[200px]overflow-y-auto custom-scrollbar">
                        {(item?.attachments || []).map((url, idx) => (
                          <PhotoView key={idx} src={url}>
                            <Box
                              className="max-w-[60px] w-full max-h-[50px] h-full group relative border cursor-pointer"
                              key={url}
                            >
                              <img
                                className="w-[60px] h-[50px] object-cover"
                                src={url}
                                alt="church_logo"
                              />

                              <Box className="absolute bg-black opacity-0 group-hover:opacity-20 top-0 left-0 w-full h-full duration-200"></Box>
                              <a
                                key={url}
                                href={generatePhotoDownloadLink(url)}
                                download
                              >
                                <FaCloudDownloadAlt className="absolute top-2 right-2 text-white hidden group-hover:block duration-200 cursor-pointer text-brand__font__size__sm hover:text-link__color" />
                              </a>
                            </Box>
                          </PhotoView>
                        ))}
                      </Box>
                    </PhotoProvider>
                  </>
                )}
              </Box>
            );
          })}
        </Box>
      </List>
    </Box>
  );
}

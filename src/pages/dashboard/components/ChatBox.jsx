import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ReactFileReader from "react-file-reader";
import { useForm } from "react-hook-form";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { IoCheckmarkDoneSharp, IoCheckmarkSharp } from "react-icons/io5";
import { MdAddPhotoAlternate } from "react-icons/md";
import { useParams } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import { env } from "../../../config/env";
import useToast from "../../../hooks/useToast";
import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from "../../../services/features/chat/chatApi";
import {
  addMessage,
  setCurrentConversationId,
  setMessages,
  setUnreadMessages,
} from "../../../services/features/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "../../../services/hook";
import { socket } from "../../../socket";
import checkIsOnline from "../../../utils/checkIsOnline";
import dateAndTime from "../../../utils/dateAndTime";
import generatePhotoDownloadLink from "../../../utils/generatePhotoDownloadLink";

export default function ChatBox() {
  const { register, handleSubmit, reset } = useForm();
  const { handleError } = useToast();
  const dispatch = useAppDispatch();

  const {
    auth: { user },
    chat: { messages, onlineUsers, unreadMessages },
  } = useAppSelector((state) => state);

  const { id } = useParams();

  const [query, setQuery] = useState({
    page: 1,
    limit: 20,
    sortBy: "dateTime",
    sortOrder: -1,
    conversationId: id,
  });

  const { data, isFetching } = useGetMessagesQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  const hasShowMore = data?.data?.totalDocs > data?.data?.docs?.length;

  const [sendMessage, { data: postMessage, error: postMessageError }] =
    useSendMessageMutation();

  const handleSetMessages = useCallback(
    (res) => {
      const filtered = unreadMessages.filter(
        (item) => item?.conversationId?._id !== id
      );
      dispatch(setMessages(res));
      dispatch(setUnreadMessages(filtered));
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const handleAddMessage = useCallback(
    (res) => {
      dispatch(addMessage(res));
    },
    [dispatch]
  );

  const handleSetCurrentConversationId = useCallback(
    (id) => {
      dispatch(setCurrentConversationId(id));
    },
    [dispatch]
  );

  useEffect(() => {
    handleSetMessages(data?.data?.docs || []);
    handleSetCurrentConversationId(id);

    return () => handleSetCurrentConversationId(null);
  }, [id, data, handleSetMessages, handleSetCurrentConversationId]);

  useEffect(() => {
    if (postMessage?.statusCode === 200) {
      handleAddMessage(postMessage?.data);
    }
    if (postMessageError) {
      handleError(postMessageError?.data?.message);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postMessage, postMessageError, handleAddMessage]);

  useEffect(() => {
    const unreadMessages = messages.filter(
      (msg) => !msg?.isRead && msg?.receiver?.userId === user?.userId
    );

    if (unreadMessages?.length) {
      socket.emit("seenMessages", { unreadMessages, receiverId: user?.userId });
    }

    socket.on("getSeenMessages", (res) => {
      const updatedMessages = messages.map((item) => {
        const matchingItem = res.find((obj) => obj?._id === item?._id);
        return matchingItem ? matchingItem : item;
      });

      handleSetMessages(updatedMessages);
    });

    return () => {
      socket.off("seenMessages");
      socket.off("getSeenMessages");
    };
  }, [messages, user?.userId, handleSetMessages]);

  const handleImage = async (files) => {
    const attachmentPromises = files.base64.map(async (file) => {
      const formData = new FormData();
      formData.append("upload_preset", env?.cloud_upload_preset);
      formData.append("cloud_name", env?.cloud_upload_name);
      formData.append("folder", "church-logo/inbox");
      formData.append("file", file);

      try {
        const { data } = await axios.post(
          `https://api.cloudinary.com/v1_1/${env?.cloud_upload_name}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        return data?.secure_url;
      } catch (error) {
        handleError("Something went wrong!");
        return null; // Return null in case of an error
      }
    });

    // Wait for all promises to resolve
    const attachment = await Promise.all(attachmentPromises);

    // Filter out any null values in case some uploads failed
    const validAttachments = attachment.filter((url) => url !== null);

    await sendMessage({
      data: { conversationId: id, text: "", attachment: validAttachments },
    });
  };

  const handleLoadMore = () => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      limit: prevQuery.limit + 10,
    }));
  };

  const onSubmit = async ({ message }) => {
    await sendMessage({
      data: { conversationId: id, text: message, attachment: [] },
    });
    reset();
  };

  const isOnline = checkIsOnline(onlineUsers, data?.data?.participantId);

  return (
    <Box className="w-full">
      <Box className="flex flex-col border justify-between bg-white">
        <Box className="flex items-center justify-between border-b py-2.5 px-4">
          <Box>
            <Box>{data?.data?.participantName}</Box>
            <Box className="text-brand__font__size__xs text-text__gray flex items-center gap-x-1">
              <Box
                className={`w-1.5 h-1.5 rounded-full ${
                  isOnline ? "bg-primary" : "bg-text__gray"
                } `}
              ></Box>{" "}
              <Box>{isOnline ? "Online" : "Offline"}</Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <ScrollToBottom className="flex-1 px-4 h-[450px] mt-4">
            {hasShowMore && (
              <Box
                className="bg-[#bdbdbd] text-white px-2 rounded w-fit mx-auto cursor-pointer text-brand__font__size__xs"
                onClick={handleLoadMore}
              >
                {isFetching ? "Loading..." : "Load more"}
              </Box>
            )}
            <Box className="flex flex-col gap-y-5 h-full">
              {messages?.length > 0 ? (
                messages.map((item) => (
                  <Box
                    key={item._id}
                    className="w-fit h-fit rounded-md text-brand__font__size__sm pr-2 flex gap-2"
                  >
                    <Box>
                      <Avatar
                        alt={item?.sender?.firstName}
                        src={
                          item?.sender?.photo?.url ||
                          "/static/images/avatar/1.jpg"
                        }
                        sx={{ backgroundColor: "#FF5722" }}
                        className="w-7 h-7 text-brand__font__size__sm"
                      />
                    </Box>
                    <Box className="text-text__gray text-brand__font__size__sm flex flex-col gap-1">
                      <p className="flex items-center gap-x-1.5">
                        <span className="font-brand__font__semibold text-brand__black__color">
                          {item?.sender?.userId === user?.userId
                            ? "You"
                            : `${item?.sender?.firstName} ${item?.sender?.lastName}`}
                        </span>
                        <em className="text-brand__font__size__xs">
                          {dateAndTime(item?.dateTime).date}{" "}
                          {dateAndTime(item?.dateTime).time}
                        </em>
                        {item?.sender?.userId === user?.userId && (
                          <span>
                            {item?.isRead ? (
                              <IoCheckmarkDoneSharp
                                size={14}
                                className="text-blue-400 font-brand__font__semibold mb-0.5"
                              />
                            ) : (
                              <IoCheckmarkSharp size={14} className="mb-0.5" />
                            )}
                          </span>
                        )}
                      </p>
                      {item?.attachment?.length > 0 ? (
                        <Box className="flex items-center flex-wrap my-1 gap-1 h-full">
                          {item?.attachment.map((url) => (
                            <Box
                              className="max-w-[200px] w-full max-h-[200px] h-full group relative"
                              key={url}
                            >
                              <img
                                className="max-w-[200px] w-full max-h-[200px] h-full object-cover"
                                src={url}
                                alt="church_logo"
                              />
                              <Box className="absolute bg-black opacity-0 group-hover:opacity-20 top-0 left-0 w-full h-full duration-200"></Box>
                              <a
                                key={url}
                                href={generatePhotoDownloadLink(url)}
                                download
                              >
                                <FaCloudDownloadAlt className="absolute top-2 right-2 text-white hidden group-hover:block duration-200 cursor-pointer text-brand__font__size__lg" />
                              </a>
                            </Box>
                          ))}
                        </Box>
                      ) : (
                        <p>{item?.text}</p>
                      )}
                    </Box>
                  </Box>
                ))
              ) : (
                <Box className="flex flex-col items-center gap-2 h-full w-full justify-center text-brand__font__size__lg text-text__gray">
                  <Typography
                    component="p"
                    className="flex items-center gap-x-2"
                  >
                    <BiSolidMessageDetail size={20} />{" "}
                    <span>No conversation</span>
                  </Typography>
                </Box>
              )}
            </Box>
          </ScrollToBottom>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <Box className="flex flex-col gap-2">
            <FormControl fullWidth>
              <OutlinedInput
                {...register("message", {
                  required: true,
                })}
                className=""
                id="message"
                name="message"
                placeholder="Type your message here"
                type="text"
                multiline
                rows="5"
                endAdornment={
                  <InputAdornment
                    position="end"
                    className="flex flex-col justify-center relative"
                  >
                    <IconButton>
                      <ReactFileReader
                        base64={true}
                        multipleFiles
                        handleFiles={handleImage}
                      >
                        <MdAddPhotoAlternate />
                      </ReactFileReader>
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box className="flex justify-between items-center w-full">
              <Box></Box>
              <Button
                type="submit"
                className="text-sm w-fit bg-primary text-white border-primary rounded-full flex items-center gap-x-1 capitalize px-6"
                variant="primary"
              >
                Send
                <IoMdSend />
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactFileReader from "react-file-reader";
import { useForm } from "react-hook-form";
import { MdAddPhotoAlternate, MdOutlineInsertEmoticon } from "react-icons/md";
import { useParams } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import { socket } from "../../../components/Header";
import { env } from "../../../config/env";
import useToast from "../../../hooks/useToast";
import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from "../../../services/features/chat/chatApi";
import checkIsOnline from "../../../utils/checkIsOnline";
import dateAndTime from "../../../utils/dateAndTime";

export default function Chat({ user, onlineUsers }) {
  const { register, handleSubmit, reset } = useForm();
  const { handleError } = useToast();

  const { id } = useParams();
  const [messages, setMessages] = useState([]);

  const [query, setQuery] = useState({
    page: 1,
    limit: 15,
    sortBy: "dateTime",
    sortOrder: -1,
    conversationId: id,
  });

  const { data, isFetching } = useGetMessagesQuery(query);
  const hasShowMore = data?.data?.totalDocs > data?.data?.docs?.length;

  const [sendMessage, { data: postMessage }] = useSendMessageMutation();

  useEffect(() => {
    setMessages(data?.data?.docs || []);
  }, [data]);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      setMessages((prevMessages) => {
        const isExist = prevMessages.find((item) => item?._id === data?._id);
        if (!isExist) {
          return [data, ...prevMessages];
        }
        return prevMessages;
      });
    });
  }, [user?.userId]);

  useEffect(() => {
    if (postMessage?.statusCode === 200) {
      setMessages((prevMessages) => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        if (lastMessage?._id !== postMessage?.data?._id) {
          return [postMessage?.data, ...prevMessages];
        }
        return prevMessages;
      });
      socket.emit("sendMessage", {
        ...postMessage?.data,
      });
    }
  }, [postMessage]);

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
          <Box className="text-brand__font__size__xs text-text__gray flex items-center gap-x-1">
            <Box
              className={`w-2 h-2 rounded-full ${
                isOnline ? "bg-primary" : "bg-text__gray"
              } `}
            ></Box>{" "}
            <Box>{isOnline ? "Online" : "Offline"}</Box>
          </Box>
        </Box>

        <Box>
          <ScrollToBottom className="flex-1 px-4 h-[620px]">
            {hasShowMore && (
              <Box
                className="bg-[#bdbdbd] text-white px-2 rounded w-fit mx-auto cursor-pointer text-brand__font__size__xs mt-2"
                onClick={handleLoadMore}
              >
                {isFetching ? "Loading..." : "Load more"}
              </Box>
            )}
            <Box className="flex flex-col gap-4">
              {messages?.length > 0 ? (
                messages
                  .slice()
                  .reverse()
                  .map((item) => (
                    <Box
                      key={item._id}
                      className="w-fit h-fit rounded-md text-brand__font__size__sm mt-2 pr-2 flex gap-2"
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
                        <p>
                          <span className="font-brand__font__semibold text-brand__black__color">
                            {" "}
                            {item?.sender?.userId === user?.userId
                              ? "You"
                              : `${item?.sender?.firstName} ${item?.sender?.lastName}`}
                          </span>{" "}
                          <em className="text-brand__font__size__xs">
                            {dateAndTime(item?.dateTime).date}{" "}
                            {dateAndTime(item?.dateTime).time}
                          </em>
                        </p>
                        {item?.attachment?.length > 0 ? (
                          <Box className="flex items-center flex-wrap mt-1 gap-1">
                            {item?.attachment.map((url) => (
                              <img
                                className="max-w-[200px] w-full max-h-[200px]  object-cover"
                                key={url}
                                src={url}
                              />
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
                    className="text-brand__font__size__sm"
                  >
                    No conversation
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
                    className="flex flex-col justify-center"
                  >
                    <IconButton>
                      <MdOutlineInsertEmoticon />
                    </IconButton>
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
                className="text-sm w-fit border-primary text-primary"
                variant="outlined"
              >
                Send
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactFileReader from "react-file-reader";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaCloudDownloadAlt, FaSmile } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { IoCheckmarkDoneSharp, IoCheckmarkSharp } from "react-icons/io5";
import { MdAddPhotoAlternate } from "react-icons/md";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useParams } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import FormattedText from "../../../components/FormattedText";
import { env } from "../../../config/env";
import useToast from "../../../hooks/useToast";
import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from "../../../services/features/chat/chatApi";
import {
  setCurrentConversationId,
  setMessages,
  setUnreadMessages,
} from "../../../services/features/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "../../../services/hook";
import { socket } from "../../../socket";
import checkIsOnline from "../../../utils/checkIsOnline";
import generatePhotoDownloadLink from "../../../utils/generatePhotoDownloadLink";
import getTimeDifference from "../../../utils/getTimeDifference";

export default function ChatBox() {
  const { handleError } = useToast();
  const dispatch = useAppDispatch();
  const inputRef = useRef(null);
  const emojiPickerRef = useRef(null);

  const {
    auth: { user },
    chat: { messages, adminsAndClientsOnlineList, unreadMessages },
  } = useAppSelector((state) => state);

  const { id } = useParams();

  const [query, setQuery] = useState({
    page: 1,
    limit: 20,
    sortBy: "dateTime",
    sortOrder: -1,
    conversationId: id,
  });

  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);

  const { data, isFetching } = useGetMessagesQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  const hasShowMore = data?.data?.totalDocs > data?.data?.docs?.length;

  const [sendMessage, { isLoading }] = useSendMessageMutation();

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

  const handleSetCurrentConversationId = useCallback(
    (id) => {
      dispatch(setCurrentConversationId(id));
    },
    [dispatch]
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    handleSetMessages(data?.data?.docs || []);
    handleSetCurrentConversationId(id);
    setQuery((prevQuery) => ({
      ...prevQuery,
      conversationId: id,
    }));

    return () => handleSetCurrentConversationId(null);
  }, [id, data, handleSetMessages, handleSetCurrentConversationId]);

  useEffect(() => {
    const unreadMessages = messages.filter(
      (msg) =>
        !msg?.isRead &&
        msg?.conversationId?._id === id &&
        msg?.receiver?.role === user?.role
    );

    if (unreadMessages?.length) {
      socket.emit("seenMessages", { unreadMessages, role: user?.role });
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
  }, [messages, user?.role, id, handleSetMessages]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(true);
  };

  const handleEmojiSelect = (emoji) => {
    const updatedText = message + emoji.emoji;
    setMessage(updatedText);
    setShowEmojiPicker(false);
    inputRef?.current?.focus();
  };

  const handleImage = async (files) => {
    setImgLoading(true);
    const attachmentPromises = files.base64.map(async (file) => {
      // Create an image element
      const image = new Image();

      // Wait for the image to load
      const imageLoaded = new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
      });

      // Set the base64 image source
      image.src = file;
      await imageLoaded;

      // Create a canvas element to convert image to PNG format
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Set canvas dimensions to match the image
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the image onto the canvas
      ctx.drawImage(image, 0, 0);

      // Convert the canvas to a PNG data URL
      const pngDataUrl = canvas.toDataURL("image/png");

      // Convert the base64 data URL to a Blob
      const blob = await fetch(pngDataUrl).then((res) => res.blob());

      // Create FormData for Cloudinary
      const formData = new FormData();
      formData.append("upload_preset", env?.cloud_upload_preset);
      formData.append("cloud_name", env?.cloud_upload_name);
      formData.append("folder", "church-logo/inbox");
      formData.append("file", blob, "image.png"); // Upload PNG

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

    setImgLoading(false);

    await sendMessage({
      data: { conversationId: id, text: "", attachment: validAttachments },
    });

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleLoadMore = () => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      limit: prevQuery.limit + 10,
    }));
  };

  const onSubmit = async () => {
    if (message.trim() !== "") {
      await sendMessage({
        data: { conversationId: id, text: message, attachment: [] },
      });

      setMessage("");

      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  const handleSetMessage = (e) => setMessage(e.target.value);

  const isOnline = checkIsOnline(adminsAndClientsOnlineList);
  const currentConversationMessages = messages.filter(
    (item) => item?.conversationId?._id === id && item?.text !== "No messages"
  );

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

        <Box className="flex-grow px-3">
          <PhotoProvider>
            <ScrollToBottom scrollViewClassName="max-h-[535px] h-full custom-scrollbar py-2">
              {hasShowMore && (
                <Box
                  className="bg-[#bdbdbd] text-white px-2 rounded w-fit mx-auto cursor-pointer text-brand__font__size__xs"
                  onClick={handleLoadMore}
                >
                  {isFetching ? "Loading..." : "Load more"}
                </Box>
              )}
              <Box className="flex flex-col gap-5 h-full">
                {currentConversationMessages?.length > 0 ? (
                  currentConversationMessages.map((item) => (
                    <Box
                      key={item._id}
                      className="text-brand__font__size__sm flex items-start gap-x-1.5"
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

                      <Box className="flex-1">
                        <p className="flex items-center gap-x-1.5">
                          <span className="font-brand__font__semibold text-brand__black__color">
                            {item?.sender?.role === user?.role
                              ? "You"
                              : `${item?.sender?.firstName} ${item?.sender?.lastName}`}
                          </span>
                          <em className="text-brand__font__size__xs capitalize">
                            {getTimeDifference(item?.dateTime)}
                          </em>
                          {item?.sender?.role === user?.role && (
                            <span>
                              {item?.isRead ? (
                                <IoCheckmarkDoneSharp
                                  size={14}
                                  className="text-blue-400 font-brand__font__semibold mb-0.5"
                                />
                              ) : (
                                <IoCheckmarkSharp
                                  size={14}
                                  className="mb-0.5"
                                />
                              )}
                            </span>
                          )}
                        </p>
                        {item?.attachment?.length > 0 ? (
                          <Box className="flex items-center flex-wrap my-1 gap-1 h-full">
                            {item?.attachment.map((url) => (
                              <PhotoView key={url} src={url}>
                                <Box
                                  className="max-w-[100px] w-full max-h-[100px] h-full group relative border cursor-pointer"
                                  key={url}
                                >
                                  <img
                                    className="w-[100px] h-[100px] object-cover"
                                    src={url}
                                    alt="church_logo"
                                  />

                                  <Box className="absolute bg-black opacity-0 group-hover:opacity-20 top-0 left-0 w-full h-full duration-200"></Box>
                                  <a
                                    key={url}
                                    href={generatePhotoDownloadLink(url)}
                                    download
                                  >
                                    <FaCloudDownloadAlt className="absolute top-2 right-2 text-white hidden group-hover:block duration-200 cursor-pointer text-brand__font__size__lg hover:text-link__color" />
                                  </a>
                                </Box>
                              </PhotoView>
                            ))}
                          </Box>
                        ) : (
                          <FormattedText text={item?.text} />
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
          </PhotoProvider>
        </Box>

        <Box className="pt-4 pb-2 px-4">
          <Box className="flex flex-col gap-2 relative">
            {showEmojiPicker && (
              <div
                ref={emojiPickerRef}
                className="absolute bottom-24 left-0 z-10"
              >
                <EmojiPicker onEmojiClick={handleEmojiSelect} />
              </div>
            )}
            <FormControl fullWidth>
              <TextField
                type="text"
                placeholder="Enter a message"
                className="text-brand__font__size__sm"
                multiline
                maxRows={4}
                value={message}
                inputRef={inputRef}
                disabled={isLoading || imgLoading}
                onChange={handleSetMessage}
                onKeyPress={handleOnKeyPress}
                InputProps={{
                  startAdornment: (
                    <Box className="flex items-center gap-1">
                      <IconButton
                        className="pr-0 hover:bg-transparent hover:text-primary duration-200"
                        disabled={isLoading || imgLoading}
                      >
                        <ReactFileReader
                          base64={true}
                          multipleFiles
                          handleFiles={handleImage}
                        >
                          <MdAddPhotoAlternate />
                        </ReactFileReader>
                      </IconButton>
                      <IconButton
                        onClick={toggleEmojiPicker}
                        className="pl-0 hover:bg-transparent hover:text-primary duration-200 "
                        disabled={isLoading || imgLoading}
                      >
                        <FaSmile size={20} />
                      </IconButton>
                    </Box>
                  ),
                  endAdornment: (
                    <IconButton
                      onClick={onSubmit}
                      disabled={isLoading || imgLoading}
                      className="text-brand__font__size__sm hover:bg-transparent hover:text-primary duration-200"
                    >
                      {isLoading || imgLoading ? (
                        "Sending..."
                      ) : (
                        <IoMdSend size={25} />
                      )}
                    </IconButton>
                  ),
                }}
              />
            </FormControl>
            <Box className="flex justify-between items-center w-full">
              <Box></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

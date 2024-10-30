import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import ReactFileReader from "react-file-reader";
import { FaSmile } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";
import { env } from "../../../../config/env";
import useToast from "../../../../hooks/useToast";
import { useSendOrderMessageMutation } from "../../../../services/features/order/orderApi";

const MessageForm = ({ data }) => {
  const { handleError } = useToast();

  const inputRef = useRef(null);
  const emojiPickerRef = useRef(null);

  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [imgLoading, setImgLoading] = useState(false);

  const [sendOrderMessage, { isLoading: isSendOrderMessageLoading }] =
    useSendOrderMessageMutation();

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const handleSetMessage = (e) => setMessage(e.target.value);

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
        handleError(error.response.data.error.message);
        return null; // Return null in case of an error
      }
    });

    // Wait for all promises to resolve
    const attachment = await Promise.all(attachmentPromises);

    // Filter out any null values in case some uploads failed
    const validAttachments = attachment.filter((url) => url !== null);

    setImgLoading(false);

    await sendOrderMessage({
      data: {
        conversationId: data?.orderInfo?.conversation,
        text: "",
        attachment: validAttachments,
      },
    });

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const onSubmit = async () => {
    if (message.trim() !== "") {
      setMessage("");

      await sendOrderMessage({
        data: {
          conversationId: data?.orderInfo?.conversation,
          text: message,
          attachment: [],
        },
      });
    }

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <Box className="pt-4 px-4 pb-4 flex flex-col gap-2 relative">
      {showEmojiPicker && (
        <Box ref={emojiPickerRef} className="absolute bottom-24 left-0 z-10">
          <EmojiPicker onEmojiClick={handleEmojiSelect} />
        </Box>
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
          disabled={isSendOrderMessageLoading || imgLoading}
          onChange={handleSetMessage}
          onKeyPress={handleOnKeyPress}
          InputProps={{
            startAdornment: (
              <Box className="flex items-center gap-1">
                <IconButton
                  className="pr-0 hover:bg-transparent hover:text-primary duration-200"
                  disabled={isSendOrderMessageLoading || imgLoading}
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
                  disabled={isSendOrderMessageLoading || imgLoading}
                >
                  <FaSmile size={20} />
                </IconButton>
              </Box>
            ),
            endAdornment: (
              <IconButton
                onClick={onSubmit}
                disabled={isSendOrderMessageLoading || imgLoading}
                className="text-brand__font__size__sm hover:bg-transparent hover:text-primary duration-200"
              >
                {isSendOrderMessageLoading || imgLoading ? (
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
  );
};

export default MessageForm;

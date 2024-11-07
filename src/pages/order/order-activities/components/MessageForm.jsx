import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import ReactFileReader from "react-file-reader";
import { FaSmile } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { MdAddPhotoAlternate, MdOutlinePayment } from "react-icons/md";
import { env } from "../../../../config/env";
import useToast from "../../../../hooks/useToast";
import {
  useAddExtraFeaturesMutation,
  useSendOrderMessageMutation,
} from "../../../../services/features/order/orderApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const MessageForm = ({ data }) => {
  const { handleError } = useToast();

  const inputRef = useRef(null);
  const emojiPickerRef = useRef(null);

  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [extraFeatures, setExtraFeatures] = useState([]);
  const [imgLoading, setImgLoading] = useState(false);

  const [sendOrderMessage, { isLoading: isSendOrderMessageLoading }] =
    useSendOrderMessageMutation();

  const [addExtraFeatures, { isLoading: isAddExtraFeatureLoading }] =
    useAddExtraFeaturesMutation();

  useEffect(() => {
    inputRef?.current?.focus();
  }, [isSendOrderMessageLoading]);

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

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setExtraFeatures([]);
  };

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
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  const handleExtraFeatureSelect = (ft) => {
    setExtraFeatures((prevFeatures) => {
      const exists = prevFeatures.some(
        (feature) => feature.value === ft.value && feature.price === ft.price
      );
      if (exists) {
        // Remove feature if it exists
        return prevFeatures.filter(
          (feature) =>
            !(feature.value === ft.value && feature.price === ft.price)
        );
      } else {
        // Add feature if it doesn't exist
        return [...prevFeatures, ft];
      }
    });
  };

  const handlePayForExtraFeatures = async () => {
    if (!extraFeatures.length) return;

    await addExtraFeatures({
      data: {
        id: data?.orderInfo?._id,
        extraFeatures,
      },
    });
  };

  const packageAdditionalFeatures =
    data?.orderInfo?.package?.additionalFeatures || [];
  const orderedAdditionalFeatures = data?.orderInfo?.additionalFeature || [];
  const orderedFeatureIdentifiers = new Set(
    orderedAdditionalFeatures.map(
      (feature) => `${feature.value}-${feature.price}`
    )
  );

  const totalExtraFeaturesCost = extraFeatures.reduce(
    (acc, feature) => acc + feature.price,
    0
  );

  return (
    <>
      <Box className="pt-4 px-4 pb-4 flex flex-col">
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
          />
        </FormControl>

        <Box className="flex justify-between items-center w-full">
          <Box className="flex items-center gap-x-2 relative">
            {showEmojiPicker && (
              <Box
                ref={emojiPickerRef}
                className="absolute bottom-8 left-0 z-10"
              >
                <EmojiPicker onEmojiClick={handleEmojiSelect} />
              </Box>
            )}
            <IconButton
              onClick={toggleEmojiPicker}
              className={`hover:bg-transparent duration-200 p-0 mt-0.5 ${
                showEmojiPicker ? "text-primary" : "hover:text-primary"
              }`}
              disabled={isSendOrderMessageLoading || imgLoading}
            >
              <FaSmile size={20} />
            </IconButton>
            <IconButton
              className="p-0 hover:bg-transparent hover:text-primary duration-200"
              disabled={isSendOrderMessageLoading || imgLoading}
            >
              <ReactFileReader
                base64={true}
                multipleFiles
                handleFiles={handleImage}
              >
                <MdAddPhotoAlternate size={25} />
              </ReactFileReader>
            </IconButton>
            <Box className="border-l h-4"></Box>
            <IconButton
              onClick={handleOpenModal}
              className="p-0 hover:bg-transparent text-brand__font__size__sm flex items-center text-link__color"
            >
              {openModal ? (
                <HiChevronUp size={20} />
              ) : (
                <HiChevronDown size={20} />
              )}

              <span>Add on</span>
            </IconButton>
          </Box>
          <Box className="flex-grow max-w-[150px] w-full flex justify-end">
            <IconButton
              onClick={onSubmit}
              disabled={isSendOrderMessageLoading || imgLoading}
              className="text-brand__font__size__base hover:bg-transparent group w-full"
            >
              <p className="w-full flex items-center justify-center gap-x-1 border px-6 py-0.5 rounded bg-primary group-hover:bg-brand__black__color text-white capitalize duration-200">
                {isSendOrderMessageLoading || imgLoading
                  ? "Sending..."
                  : "Send"}
              </p>
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={style}>
          <Card variant="outlined" sx={{ maxWidth: 360 }}>
            <Box sx={{ p: 2 }}>
              <Stack>
                <h6 className="text-brand__font__size__md">Choose</h6>
              </Stack>

              <Stack>
                <FormGroup>
                  {packageAdditionalFeatures.map((ft) => {
                    const isOrderedFeature = orderedFeatureIdentifiers.has(
                      `${ft.value}-${ft.price}`
                    );

                    return (
                      <FormControlLabel
                        key={ft.value}
                        control={
                          <Checkbox
                            defaultChecked={isOrderedFeature}
                            disabled={isOrderedFeature}
                          />
                        }
                        onChange={() => handleExtraFeatureSelect(ft)}
                        label={`${ft.label} ($${ft.price})`}
                      />
                    );
                  })}
                </FormGroup>
              </Stack>
            </Box>
            <Divider />
            <Box className="p-2 flex flex-col gap-1">
              <h6 className="text-brand__font__size__md text-end">
                Total: ${totalExtraFeaturesCost}
              </h6>

              <IconButton
                onClick={handlePayForExtraFeatures}
                disabled={!totalExtraFeaturesCost}
                className="text-brand__font__size__base hover:bg-transparent text-white group rounded p-0"
              >
                <span
                  className={`w-full justify-center flex items-center gap-x-1 border px-4 py-0.5 rounded text-white capitalize duration-200 ${
                    !totalExtraFeaturesCost
                      ? "bg-text__gray"
                      : "bg-primary group-hover:bg-brand__black__color"
                  }`}
                >
                  <MdOutlinePayment />
                  <span>{isAddExtraFeatureLoading ? "Loading..." : "Pay"}</span>
                </span>
              </IconButton>
            </Box>
          </Card>
        </Box>
      </Modal>
    </>
  );
};

export default MessageForm;

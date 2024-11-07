import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import { FaSmile } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { useAddReviewMutation } from "../../../../services/features/order/orderApi";
import { useAppSelector } from "../../../../services/hook";

const ReviewForm = ({ data }) => {
  const {
    chat: { conversationId },
  } = useAppSelector((state) => state);

  const inputRef = useRef(null);
  const emojiPickerRef = useRef(null);

  const [review, setReview] = useState({
    reviewText: "",
    communicationRatings: 1,
    serviceRatings: 1,
    recommendedRatings: 1,
    orderId: data?.orderInfo?.orderId,
  });
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [addReview, { isLoading }] = useAddReviewMutation();

  const onSubmit = async () => {
    if (!review.reviewText) return;

    setReview({
      reviewText: "",
      communicationRatings: 1,
      serviceRatings: 1,
      recommendedRatings: 1,
      orderId: data?.orderInfo?.orderId,
    });
    await addReview({ data: review });
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(true);
  };

  const handleEmojiSelect = (emoji) => {
    const updatedText = review.reviewText + emoji.emoji;
    setReview((prev) => ({
      ...prev,
      reviewText: updatedText,
    }));
    setShowEmojiPicker(false);

    inputRef?.current?.focus();
  };

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

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <>
      <Box className="pt-4 px-4 pb-4 flex flex-col gap-3">
        {!data?.orderInfo.isReviewed && (
          <Box className="flex flex-col gap-3">
            <FormControl fullWidth>
              <TextField
                type="text"
                placeholder="Share feedback..."
                className="text-brand__font__size__sm"
                multiline
                minRows={4}
                inputRef={inputRef}
                value={review.reviewText}
                disabled={isLoading}
                onChange={(e) =>
                  setReview((prev) => ({
                    ...prev,
                    reviewText: e.target.value,
                  }))
                }
                onKeyPress={handleOnKeyPress}
              />
            </FormControl>

            <Box className="flex flex-col gap-1 text-brand__font__size__sm">
              <Box className="flex justify-between">
                <Rating
                  value={review.communicationRatings}
                  onChange={(event, newValue) => {
                    setReview((prev) => ({
                      ...prev,
                      communicationRatings: newValue ? newValue : 1,
                    }));
                  }}
                />
                <p>Communication</p>
              </Box>
              <Box className="flex justify-between">
                <Rating
                  value={review.serviceRatings}
                  onChange={(event, newValue) => {
                    setReview((prev) => ({
                      ...prev,
                      serviceRatings: newValue ? newValue : 1,
                    }));
                  }}
                />
                <p>Service as Describe</p>
              </Box>
              <Box className="flex justify-between">
                <Rating
                  value={review.recommendedRatings}
                  onChange={(event, newValue) => {
                    setReview((prev) => ({
                      ...prev,
                      recommendedRatings: newValue ? newValue : 1,
                    }));
                  }}
                />
                <p>Recommended</p>
              </Box>
            </Box>

            <Box className="flex justify-end items-center w-full">
              <Box className="relative flex gap-x-2">
                {showEmojiPicker && (
                  <Box
                    ref={emojiPickerRef}
                    className="absolute bottom-10 right-0 z-10"
                  >
                    <EmojiPicker onEmojiClick={handleEmojiSelect} />
                  </Box>
                )}
                <IconButton
                  onClick={toggleEmojiPicker}
                  className={`hover:bg-transparent duration-200 p-0 ${
                    showEmojiPicker ? "text-primary" : "hover:text-primary"
                  }`}
                  disabled={isLoading}
                >
                  <FaSmile size={20} />
                </IconButton>
                <IconButton
                  onClick={onSubmit}
                  disabled={isLoading}
                  className="text-brand__font__size__base hover:bg-transparent p-0 group"
                >
                  <span className="flex items-center gap-x-1 border px-6 py-0.5 rounded bg-primary group-hover:bg-brand__black__color text-white capitalize duration-200">
                    <span>{isLoading ? "Submitting..." : "Submit"}</span>
                  </span>
                </IconButton>
              </Box>
            </Box>
          </Box>
        )}

        <p className="text-brand__font__size__sm text-center">
          <span className="text-primary">
            Your order is complete. If you need to contact the admin.
          </span>{" "}
          <HashLink
            to={`/dashboard/inbox/${conversationId}#chat`}
            className="text-link__color"
          >
            Go to Inbox
          </HashLink>
        </p>
      </Box>

      {/* <Modal open={openModal} onClose={handleCloseModal}>
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
      </Modal> */}
    </>
  );
};

export default ReviewForm;

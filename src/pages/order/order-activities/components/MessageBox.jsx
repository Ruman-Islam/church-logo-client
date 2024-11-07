import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useRef } from "react";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoCheckmarkDoneSharp, IoCheckmarkSharp } from "react-icons/io5";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ScrollToBottom from "react-scroll-to-bottom";
import FormattedText from "../../../../components/FormattedText";
import useToast from "../../../../hooks/useToast";
import {
  setOrderMessages,
  setOrderUnreadMessages,
} from "../../../../services/features/chat/chatSlice";
import { useUpdateOrderMessageActionMutation } from "../../../../services/features/order/orderApi";
import { useAppDispatch } from "../../../../services/hook";
import { socket } from "../../../../socket";
import generatePhotoDownloadLink from "../../../../utils/generatePhotoDownloadLink";
import getTimeDifference from "../../../../utils/getTimeDifference";

function GeneralMessage({ item, data }) {
  const { handleSuccess } = useToast();

  const [updateOrderMessageAction, { data: updateActionData, isSuccess }] =
    useUpdateOrderMessageActionMutation();

  const handleAcceptOrder = async () => {
    await updateOrderMessageAction({
      data: { id: item._id, action: "completed" },
    });
  };

  const handleRevisionOrder = async () => {
    await updateOrderMessageAction({
      data: { id: item._id, action: "revision" },
    });
  };

  const handleSuccessMessage = useCallback(
    (msg) => {
      handleSuccess(msg);
    },
    [handleSuccess]
  );

  const hasNotifiedRef = useRef(false);

  useEffect(() => {
    if (isSuccess && !hasNotifiedRef.current) {
      const action = updateActionData?.data?.action;

      if (action === "revision") {
        handleSuccessMessage("Order is under revision");
      } else if (action === "completed") {
        handleSuccessMessage("Order has been accepted");
      }

      // Mark as notified to prevent further calls
      hasNotifiedRef.current = true;
    } else if (!isSuccess) {
      // Reset the ref if isSuccess becomes false again
      hasNotifiedRef.current = false;
    }
  }, [handleSuccessMessage, updateActionData, isSuccess]);

  return (
    <Box className="text-brand__font__size__sm flex items-start gap-x-1.5">
      <Box>
        <Avatar
          alt={item?.sender?.firstName}
          src={item?.sender?.photo?.url || "/static/images/avatar/1.jpg"}
          sx={{ backgroundColor: "#FF5722" }}
          className="w-7 h-7 text-brand__font__size__sm"
        />
      </Box>

      <Box className="flex-1">
        <p className="flex items-center gap-x-1.5">
          <span className="font-brand__font__semibold text-brand__black__color">
            {item?.sender?.role === data?.user?.role
              ? "You"
              : `${item?.sender?.firstName} ${item?.sender?.lastName}`}
          </span>
          <em className="text-brand__font__size__xs capitalize">
            {getTimeDifference(item?.dateTime)}
          </em>
          {item?.sender?.role === data?.user?.role && (
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

        {item?.isDelivered && !item?.isReview && (
          <Box className="border mt-3 max-w-[640px] w-full">
            <Box className="bg-section__bg_color text-text__gray p-2 border-b">
              Delivery
            </Box>

            {item?.text.length > 0 && item?.attachment?.length > 0 && (
              <Box className="p-2 flex items-center gap-2">
                <Box className="max-w-[138px] w-full flex items-center p-2 pb-5 flex-wrap my-1 gap-1 h-full">
                  {item?.attachment.map((url) => (
                    <PhotoView key={url} src={url}>
                      <Box
                        className="max-w-[120px] w-full max-h-[120px] h-full group relative border cursor-pointer"
                        key={url}
                      >
                        <img
                          className="w-[120px] h-[120px] object-cover"
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
                <FormattedText text={item?.text} />
              </Box>
            )}

            {!item.action && (
              <Box className="flex justify-center my-2 p-2 gap-2 text-white text-brand__font__size__base">
                <button
                  onClick={handleAcceptOrder}
                  className="bg-primary max-w-[250px] w-full py-2 rounded hover:shadow-xl"
                >
                  Accept
                </button>
                {data?.orderInfo?.totalRevision >
                  data?.orderInfo?.usedRevision && (
                  <button
                    onClick={handleRevisionOrder}
                    className="bg-[#ED6C02] max-w-[250px] w-full py-2 rounded hover:shadow-xl"
                  >
                    Revision
                  </button>
                )}
              </Box>
            )}
          </Box>
        )}

        {item?.isReview && !item?.isDelivered && (
          <Box className="border mt-3 text-text__gray  max-w-[640px] w-ful w-full">
            <Box className="bg-section__bg_color border-b p-2 pb-0">
              <Rating
                value={item?.review?.ratingPoints}
                readOnly
                size="small"
              />
            </Box>

            <Box className="flex justify-between items-center">
              <PhotoView
                key={item?.review?.productImageUrl}
                src={item?.review?.productImageUrl}
              >
                <Box
                  className="max-w-[120px] w-full max-h-[120px] h-full group relative border cursor-pointer m-2"
                  key={item?.review?.productImageUrl}
                >
                  <img
                    className="w-[120px] h-[120px] object-cover"
                    src={item?.review?.productImageUrl}
                    alt="church_logo"
                  />

                  <Box className="absolute bg-black opacity-0 group-hover:opacity-20 top-0 left-0 w-full h-full duration-200"></Box>
                  <a
                    key={item?.review?.productImageUrl}
                    href={generatePhotoDownloadLink(
                      item?.review?.productImageUrl
                    )}
                    download
                  >
                    <FaCloudDownloadAlt className="absolute top-2 right-2 text-white hidden group-hover:block duration-200 cursor-pointer text-brand__font__size__lg hover:text-link__color" />
                  </a>
                </Box>
              </PhotoView>

              <Box className="w-full flex flex-col gap-1.5 py-4 text-brand__black__color">
                <Box className="flex justify-between items-center px-2">
                  <p>Communication</p>
                  <Rating
                    value={item?.review?.communicationRatings}
                    readOnly
                    size="small"
                  />
                </Box>
                <Box className="flex justify-between items-center px-2">
                  <p>Service as Describe</p>
                  <Rating
                    value={item?.review?.serviceRatings}
                    readOnly
                    size="small"
                  />
                </Box>
                <Box className="flex justify-between items-center px-2">
                  <p>Recommended</p>
                  <Rating
                    value={item?.review?.recommendedRatings}
                    readOnly
                    size="small"
                  />
                </Box>
              </Box>
            </Box>

            {item?.text.length > 0 && (
              <Box className="p-2">
                <FormattedText text={item?.text} />
              </Box>
            )}
          </Box>
        )}

        {!item?.isDelivered && !item?.isReview && (
          <>
            {item?.attachment?.length > 0 && (
              <Box className="flex items-center flex-wrap my-1 gap-1 h-full">
                {item?.attachment.map((url) => (
                  <PhotoView key={url} src={url}>
                    <Box
                      className="max-w-[200px] w-full max-h-[200px] h-full group relative border cursor-pointer"
                      key={url}
                    >
                      <img
                        className="w-[200px] h-[200px] object-cover"
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
            )}

            {item?.text.length > 0 && <FormattedText text={item?.text} />}
          </>
        )}
      </Box>
    </Box>
  );
}

const MessageBox = ({ data }) => {
  const dispatch = useAppDispatch();

  const handleSetMessages = useCallback(
    (res) => {
      const filtered = data.orderUnreadMessages.filter(
        (item) => item?.order?._id !== data?.id
      );

      dispatch(setOrderMessages(res));
      dispatch(setOrderUnreadMessages(filtered));
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  useEffect(() => {
    handleSetMessages(data?.orderMessagesData?.data?.docs || []);
  }, [handleSetMessages, data?.orderMessagesData?.data?.docs]);

  useEffect(() => {
    const unreadMessages = data?.orderMessages.filter(
      (msg) =>
        !msg?.isRead &&
        msg?.order?._id === data?.id &&
        msg?.receiver?.role === data?.user?.role
    );

    if (unreadMessages?.length) {
      socket.emit("seenOrderMessages", {
        unreadMessages,
        role: data?.user?.role,
      });
    }

    socket.on("getSeenOrderMessages", (res) => {
      const updatedMessages = data?.orderMessages.map((item) => {
        const matchingItem = res.find((obj) => obj?._id === item?._id);
        return matchingItem ? matchingItem : item;
      });

      handleSetMessages(updatedMessages);
    });

    return () => {
      socket.off("seenOrderMessages");
      socket.off("getSeenOrderMessages");
    };
  }, [data?.id, data?.orderMessages, data?.user?.role, handleSetMessages]);

  const hasShowMore =
    data?.orderMessagesData?.data?.totalDocs >
    data?.orderMessagesData?.data?.docs?.length;

  const currentConversationMessages = data.orderMessages.filter(
    (item) => (item?.order?._id || item?.order) === data?.orderInfo?._id
  );

  const handleLoadMore = () => {
    data.setQuery((prevQuery) => ({
      ...prevQuery,
      limit: prevQuery.limit + 10,
    }));
  };

  return (
    <Box className="px-4">
      {currentConversationMessages.length <= 0 && !data.isFetching2 ? (
        <Box className="flex flex-col items-center gap-2 w-full justify-center text-brand__font__size__lg text-text__gray h-[450px]">
          <Typography component="p" className="flex items-center gap-x-2">
            <BiSolidMessageDetail size={20} /> <span>No conversation</span>
          </Typography>
        </Box>
      ) : (
        <PhotoProvider>
          <ScrollToBottom scrollViewClassName="h-[450px] overflow-y-auto custom-scrollbar py-2">
            {hasShowMore && (
              <Box
                className="bg-[#bdbdbd] text-white px-2 rounded w-fit mx-auto cursor-pointer text-brand__font__size__xs"
                onClick={handleLoadMore}
              >
                {data.isFetching2 ? "Loading..." : "Load more"}
              </Box>
            )}
            <Box className="flex flex-col gap-5 h-full">
              {currentConversationMessages.map((item) => (
                <GeneralMessage key={item._id} item={item} data={data} />
              ))}
            </Box>
          </ScrollToBottom>
        </PhotoProvider>
      )}
    </Box>
  );
};

export default MessageBox;

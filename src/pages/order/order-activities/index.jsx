import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { useCallback, useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../../components/common/Layout";
import NoDataFound from "../../../components/common/NoDataFound";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import {
  setCurrentOrderConversationId,
  setOrderInfo,
} from "../../../services/features/chat/chatSlice";
import {
  useGetOneOrderQuery,
  useGetOrderMessagesQuery,
} from "../../../services/features/order/orderApi";
import { useAppDispatch, useAppSelector } from "../../../services/hook";
import dateAndTime from "../../../utils/dateAndTime";
import generatePhotoDownloadLink from "../../../utils/generatePhotoDownloadLink";
import { getImgUrl } from "../../../utils/getImgUrl-utility";
import MessageBox from "./components/MessageBox";
import MessageForm from "./components/MessageForm";
import MessageHead from "./components/MessageHead";
import ReviewForm from "./components/ReviewForm";

export default function OrderActivityScreen() {
  const scrollWithOffset = useScrollWithOffset();
  const dispatch = useAppDispatch();

  const {
    auth: { user },
    chat: { orderMessages, orderUnreadMessages, orderInfo },
  } = useAppSelector((state) => state);

  const { id } = useParams();

  const [query, setQuery] = useState({
    page: 1,
    limit: 20,
    sortBy: "dateTime",
    sortOrder: -1,
    order: id,
  });

  const {
    data,
    isSuccess: isGetOneOrderSuccess,
    isLoading,
  } = useGetOneOrderQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const { data: orderMessagesData, isFetching: isFetching2 } =
    useGetOrderMessagesQuery(query.order ? query : skipToken, {
      refetchOnMountOrArgChange: true,
    });

  const handleSetOrderInfo = useCallback(
    (data) => {
      dispatch(setOrderInfo(data));
    },
    [dispatch]
  );

  const handleSetCurrentOrderConversationId = useCallback(
    (id) => {
      dispatch(setCurrentOrderConversationId(id));
    },
    [dispatch]
  );

  useEffect(() => {
    if (isGetOneOrderSuccess) {
      handleSetOrderInfo(data?.data);
    }
  }, [data?.data, handleSetOrderInfo, isGetOneOrderSuccess]);

  useEffect(() => {
    if (id) {
      handleSetCurrentOrderConversationId(id);
    }

    return () => handleSetCurrentOrderConversationId(null);
  }, [id, handleSetCurrentOrderConversationId]);

  const { date } = dateAndTime(orderInfo?.deliveryDateUTC);
  const packageTitle = orderInfo?.package?.title || "";

  return (
    <Layout title="Order Activity">
      <Box
        id="activities"
        component="section"
        className="bg-section__bg_color h-full"
      >
        {!orderInfo && !isLoading ? (
          <NoDataFound />
        ) : (
          <>
            <Box
              component="div"
              className="max-w-[1024px] w-full mx-auto px-4 py-5 lg:py-10"
            >
              <Box
                component="div"
                className="flex flex-col lg:flex-row-reverse gap-5"
              >
                <Box className="flex flex-col gap-5 text-brand__black__color lg:max-w-[250px] w-full">
                  <Box
                    component="div"
                    className="border bg-white p-4 flex flex-col gap-5"
                  >
                    <Box component="div">
                      <Typography
                        variant="p"
                        className="font-brand__font__semibold"
                      >
                        Order Details
                      </Typography>
                      <Box
                        component="div"
                        className="flex gap-x-2 items-center mt-2.5"
                      >
                        <Box>
                          <Avatar
                            variant="square"
                            src={
                              orderInfo?.package?.thumbnail ||
                              getImgUrl(
                                "image/gallery/logo-design/church_logo_01.jpg"
                              )
                            }
                            className="w-[70px] h-12 text-brand__font__size__lg2 rounded"
                          />
                        </Box>
                        <Box className="text-brand__font__size__xs flex flex-col gap-1">
                          <Typography
                            variant="p"
                            className="font-brand__font__semibold leading-tight"
                          >
                            {packageTitle.length > 36
                              ? packageTitle.slice(0, 36) + "..."
                              : packageTitle}
                          </Typography>
                          <Box className="capitalize">
                            <Typography
                              variant="p"
                              sx={{
                                padding: "2px 8px",
                                color: "#fff",
                                borderRadius: "10px",
                                backgroundColor:
                                  orderInfo?.orderStatus === "in progress"
                                    ? "#0288D1"
                                    : orderInfo?.orderStatus === "delivered"
                                    ? "#9C27B0"
                                    : orderInfo?.orderStatus === "revision"
                                    ? "#ED6C02"
                                    : "#2E7D32",
                              }}
                            >
                              {orderInfo?.orderStatus}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Box className="text-brand__font__size__sm text-text__gray">
                      <Box className="flex items-center justify-between py-1">
                        <Typography variant="p">Delivery date</Typography>
                        <Typography
                          variant="p"
                          className="text-brand__font__size__xs font-brand__font__semibold text-brand__black__color"
                        >
                          {date}
                        </Typography>
                      </Box>
                      <Box className="flex items-center justify-between py-1">
                        <Typography variant="p">Total price</Typography>
                        <Typography
                          variant="p"
                          className="text-brand__font__size__xs font-brand__font__semibold text-brand__black__color"
                        >
                          ${orderInfo?.totalPrice}
                        </Typography>
                      </Box>
                      <Box className="flex items-center justify-between py-1">
                        <Typography variant="p">Order ID</Typography>
                        <Typography
                          variant="p"
                          className="text-brand__font__size__xs font-brand__font__semibold text-brand__black__color"
                        >
                          #{orderInfo?.orderId}
                        </Typography>
                      </Box>
                      <Box className="flex items-center justify-between py-1">
                        <Typography variant="p">Revision remaining</Typography>
                        <Typography
                          variant="p"
                          className="text-brand__font__size__xs font-brand__font__semibold text-brand__black__color"
                        >
                          {(orderInfo?.totalRevision || 0) -
                            (orderInfo?.usedRevision || 0)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box className="text-text__gray border rounded-full bg-section__bg_color flex justify-between items-center w-full">
                    <Box className="px-4 py-1 rounded-full hover:cursor-default flex-grow text-center">
                      <Typography variant="p"> Switch to</Typography>
                    </Box>
                    <Box className="bg-white rounded-full border-l flex-grow text-center">
                      <HashLink
                        className="px-4 py-1 inline-block"
                        to="/dashboard#dashboard"
                        scroll={(el) => scrollWithOffset(el, 135)}
                      >
                        <Typography variant="p">Dashboard</Typography>
                      </HashLink>
                    </Box>
                  </Box>

                  {id && (
                    <Box className="bg-white max-h-[390px] h-full overflow-y-auto custom-scrollbar">
                      <ListSubheader>
                        <Typography variant="caption">
                          Attachments (
                          {
                            orderMessagesData?.data?.orderConversation
                              ?.attachments?.length
                          }
                          )
                        </Typography>
                      </ListSubheader>
                      <Box className="flex flex-wrap gap-1 px-4">
                        <PhotoProvider>
                          {(
                            orderMessagesData?.data?.orderConversation
                              ?.attachments || []
                          ).map((url, idx) => (
                            <PhotoView key={idx} src={url}>
                              <Box
                                className="max-w-[70px] w-full max-h-[50px] h-full group relative cursor-pointer"
                                key={url}
                              >
                                <img
                                  className="w-[70px] h-[50px] object-cover"
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
                        </PhotoProvider>
                      </Box>
                    </Box>
                  )}
                </Box>

                <Box component="div" className="flex flex-col h-full flex-1 gap-5">
                  <ListSubheader className="bg-transparent">
                    <Box className="flex uppercase text-text__gray font-brand__font__semibold gap-6 border-b">
                      <HashLink
                        to={`/order/order-activities/${id}`}
                        scroll={(el) => scrollWithOffset(el, 135)}
                        className="inline-block hover:border-b-2 hover:border-primary border-b-2 border-primary"
                      >
                        Activity
                      </HashLink>
                      <HashLink
                        to={`/order/order-details/${id}`}
                        scroll={(el) => scrollWithOffset(el, 135)}
                        className="inline-block hover:border-b-2 hover:border-primary"
                      >
                        Details
                      </HashLink>
                      <HashLink
                        to={`/order/order-requirements/${id}`}
                        scroll={(el) => scrollWithOffset(el, 135)}
                        className="inline-block hover:border-b-2 hover:border-primary"
                      >
                        Requirements
                      </HashLink>
                    </Box>
                  </ListSubheader>

                  <Box
                    component="div"
                    className="border bg-white flex flex-col h-full justify-between"
                  >
                    <MessageHead
                      data={orderMessagesData?.data?.orderConversation}
                    />

                    <MessageBox
                      data={{
                        id,
                        orderMessagesData,
                        orderUnreadMessages,
                        user,
                        orderInfo,
                        orderMessages,
                        isFetching2,
                        setQuery,
                      }}
                    />

                    {orderInfo?.orderStatus !== "completed" ? (
                      <MessageForm data={{ orderInfo }} />
                    ) : (
                      <ReviewForm data={{ orderInfo }} />
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Layout>
  );
}

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../../components/common/Layout";
import NoDataFound from "../../../components/common/NoDataFound";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import { setOrderInfo } from "../../../services/features/chat/chatSlice";
import { useGetOneOrderQuery } from "../../../services/features/order/orderApi";
import { useAppDispatch, useAppSelector } from "../../../services/hook";
import { calculateAdditionalItemPrice } from "../../../utils/calculateAdditionalItemPrice";
import dateAndTime from "../../../utils/dateAndTime";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

export default function OrderDetailScreen() {
  const scrollWithOffset = useScrollWithOffset();
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const {
    chat: { orderInfo },
  } = useAppSelector((state) => state);

  const {
    data,
    isSuccess: isGetOneOrderSuccess,
    isLoading,
  } = useGetOneOrderQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const handleSetOrderInfo = useCallback(
    (data) => {
      dispatch(setOrderInfo(data));
    },
    [dispatch]
  );

  useEffect(() => {
    if (isGetOneOrderSuccess) {
      handleSetOrderInfo(data?.data);
    }
  }, [data?.data, handleSetOrderInfo, isGetOneOrderSuccess]);

  const packageTitle = orderInfo?.package?.title || "";
  const additionalFeature = orderInfo?.additionalFeature || [];
  const additionalProgrammingLanguage =
    orderInfo?.additionalProgrammingLang || [];
  const featuredItems = orderInfo?.package?.featuredItems || [];
  const additionalDeliveryTime = orderInfo?.additionalDeliveryTime || [];
  const additionalRevision = orderInfo?.additionalRevision || [];

  const features = [
    ...featuredItems,
    ...additionalFeature,
    ...additionalProgrammingLanguage,
    ...additionalDeliveryTime,
    ...additionalRevision,
    ...[{ label: "Package Price", price: orderInfo?.packagePrice || 0 }],
  ];

  const { totalPrice: totalAdditionalItemPrice } =
    calculateAdditionalItemPrice(features);

  const { date, time } = dateAndTime(orderInfo?.deliveryDateUTC);

  return (
    <Layout title="Order Detail">
      <Box
        id="details"
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
                            {packageTitle?.length > 36
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
                      >
                        <Typography variant="p">Dashboard</Typography>
                      </HashLink>
                    </Box>
                  </Box>

                  <Box
                    component="div"
                    className="lg:max-w-[250px] w-full border bg-white p-4 flex flex-col gap-5"
                  >
                    <Typography
                      variant="p"
                      className="font-brand__font__semibold"
                    >
                      Support
                    </Typography>
                    <HashLink to="/package/${pg?.packageId}#package-faq">
                      <Box component="div" className="flex gap-2">
                        <Box className="mt-1">
                          <FaQuestionCircle />
                        </Box>
                        <Box className="flex flex-col">
                          <Typography variant="p">FAQs</Typography>
                          <Typography
                            variant="p"
                            className="text-text__gray text-brand__font__size__sm leading-tight"
                          >
                            Find needed answers.
                          </Typography>
                        </Box>
                      </Box>
                    </HashLink>
                    <Divider />
                    <HashLink to="/package/${pg?.packageId}#package-faq">
                      <Box component="div" className="flex gap-2">
                        <Box className="mt-1">
                          <HiSupport />
                        </Box>
                        <Box className="flex flex-col">
                          <Typography variant="p">Resolution Center</Typography>
                          <Typography
                            variant="p"
                            className="text-text__gray text-brand__font__size__sm leading-tight"
                          >
                            Resolve order issues.
                          </Typography>
                        </Box>
                      </Box>
                    </HashLink>
                  </Box>
                </Box>

                <Box component="div" className="flex-1 flex flex-col gap-5">
                  <ListSubheader className="bg-transparent">
                    <Box className="flex uppercase text-text__gray font-brand__font__semibold gap-6 border-b">
                      <HashLink
                        to={`/order/order-activities/${id}`}
                        scroll={(el) => scrollWithOffset(el, 135)}
                        className="inline-block hover:border-b-2 hover:border-primary"
                      >
                        Activity
                      </HashLink>
                      <HashLink
                        to={`/order/order-details/${id}`}
                        scroll={(el) => scrollWithOffset(el, 135)}
                        className="inline-block hover:border-b-2 hover:border-primary border-b-2 border-primary"
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
                    className="border bg-white h-full p-10 text-brand__black__color flex flex-col gap-3"
                  >
                    <Box className="flex justify-between gap-4">
                      <Box className="flex flex-col gap-1">
                        <Typography
                          variant="p"
                          className="font-brand__font__semibold text-brand__font__size__md"
                        >
                          {orderInfo?.package?.title}
                        </Typography>
                        <Typography
                          variant="p"
                          className=" text-brand__font__size__sm text-text__gray"
                        >
                          <span>Date ordered</span>{" "}
                          <span className="font-brand__font__600">
                            {date} | {time}
                          </span>
                        </Typography>
                      </Box>
                      <Box className="text-end flex flex-col">
                        <Typography
                          variant="p"
                          className="text-brand__font__size__sm lead"
                        >
                          Total price
                        </Typography>
                        <Typography
                          variant="p"
                          className="font-brand__font__semibold text-brand__font__size__md"
                        >
                          ${orderInfo?.totalPrice}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider className="my-2.5" />

                    <Box>
                      <Typography
                        variant="p"
                        className="text-brand__font__size__sm text-text__gray"
                      >
                        <span>Order ID</span>{" "}
                        <span className="font-brand__font__600">
                          #{orderInfo?.orderId}
                        </span>
                      </Typography>
                    </Box>

                    <Divider className="my-2.5" />

                    <Box>
                      <Typography
                        variant="p"
                        className="text-brand__font__size__sm text-text__gray mb-1 inline-block"
                      >
                        Features
                      </Typography>
                      <Box className="border">
                        <Box className="border-b p-3 flex justify-between bg-section__bg_color">
                          <Typography
                            variant="p"
                            className="text-brand__font__size__sm inline-block basis-[33.33%]"
                          >
                            Item
                          </Typography>

                          <Typography
                            variant="p"
                            className="text-brand__font__size__sm inline-block basis-[33.33%] text-end"
                          >
                            Price
                          </Typography>
                        </Box>

                        {features.length > 0 &&
                          features.map((item) => (
                            <Box
                              key={item.label || item}
                              className={`border-b p-3 flex justify-between ${
                                item.label === "Package Price" &&
                                "bg-section__bg_color"
                              }`}
                            >
                              <Typography
                                variant="p"
                                className="text-brand__font__size__sm inline-block basis-[33.33%]"
                              >
                                {item.label || item}
                              </Typography>
                              <Typography
                                variant="p"
                                className="text-brand__font__size__sm inline-block basis-[33.33%] text-end"
                              >
                                ${item.price || 0}
                              </Typography>
                            </Box>
                          ))}

                        <Box className="p-3 flex justify-between bg-section__bg_color">
                          <Typography
                            variant="p"
                            className="text-brand__font__size__sm inline-block basis-[33.33%]"
                          >
                            Total
                          </Typography>

                          <Typography
                            variant="p"
                            className="text-brand__font__size__sm inline-block basis-[33.33%] text-end"
                          >
                            ${totalAdditionalItemPrice}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
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

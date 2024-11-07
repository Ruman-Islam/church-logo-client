import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useEffect, useMemo, useState } from "react";
import { FaDollarSign } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import { useGetOrderListQuery } from "../../../services/features/order/orderApi";
import { useAppSelector } from "../../../services/hook";
import startCountdown from "../../../utils/countdown";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

export function OrderCard({ order, unreadMessages }) {
  const matchingMessageCount = useMemo(
    () => unreadMessages.filter((msg) => msg.order._id === order._id).length,
    [unreadMessages, order._id]
  );

  const scrollWithOffset = useScrollWithOffset();
  const [timer, setTimer] = useState("");

  useEffect(() => {
    const cleanup = startCountdown(order?.deliveryDateUTC, setTimer);
    return cleanup;
  }, [order?.deliveryDateUTC]);

  return (
    <Box className="bg-white px-3 py-5 md:py-3 border flex flex-col md:flex-row justify-between gap-2">
      <Box className="basis-[100%] md:basis-[40%] items-center justify-center md:justify-start flex flex-col md:flex-row gap-3">
        <Avatar
          variant="square"
          src={
            order?.package?.thumbnail1 ||
            getImgUrl("image/gallery/logo-design/church_logo_01.jpg")
          }
          className="w-16 h-14 text-brand__font__size__lg2"
        />
        <Box className="text-brand__font__size__sm leading-tight text-center md:text-start">
          <Typography variant="body1">
            {order?.package?.title.length > 36
              ? order?.package?.title.slice(0, 36) + "..."
              : order?.package?.title}
          </Typography>
          <Typography
            variant="body2"
            className="block text-text__gray text-brand__font__size__xs mt-1"
          >
            Order ID: {order?.orderId}
          </Typography>
        </Box>
      </Box>
      <Box className="flex-grow flex flex-col md:flex-row items-center justify-between text-text__gray gap-2">
        <Box className="flex-grow flex flex-col md:flex-row gap-y-2 justify-between items-center w-full text-brand__font__size__sm text-center md:text-start">
          <Box>
            <Typography variant="body2">Price</Typography>
            <Typography variant="body2" className="flex items-center">
              <FaDollarSign />
              <span>{order?.totalPrice}</span>
            </Typography>
          </Box>
          {/* {["in progress", "revision"].includes(order?.orderStatus) && (
            <Box>
              <Typography variant="body2">Due In</Typography>
              <Typography variant="body2" className="flex items-center gap-x-1">
                <IoMdTime />
                <span>{timer}</span>
              </Typography>
            </Box>
          )} */}
          <Box>
            <Typography variant="body2">Due In</Typography>
            <Typography variant="body2" className="flex items-center gap-x-1">
              <IoMdTime />
              <span>{timer}</span>
            </Typography>
          </Box>
          <Box>
            <Chip
              color={
                order?.orderStatus === "in progress"
                  ? "info"
                  : order?.orderStatus === "delivered"
                  ? "secondary"
                  : order?.orderStatus === "revision"
                  ? "warning"
                  : "success"
              }
              size="small"
              label={order?.orderStatus}
              className="uppercase text-[10px] px-1"
            />
          </Box>
        </Box>
        <Box className="basis-[25%] text-center">
          <HashLink
            to={`/order/order-activities/${order?._id}#activities`}
            scroll={(el) => scrollWithOffset(el, 135)}
          >
            <Badge
              color="error"
              overlap="circular"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: 9,
                  height: 15,
                  minWidth: 15,
                },
              }}
              badgeContent={matchingMessageCount}
            >
              <VisibilityIcon />
            </Badge>
          </HashLink>
        </Box>
      </Box>
    </Box>
  );
}

export default function Orders() {
  const {
    chat: { orderUnreadMessages },
  } = useAppSelector((state) => state);

  const [open, setOpen] = useState(true);
  const query = {
    page: 1,
    limit: 100,
  };

  const { data: orderData, refetch } = useGetOrderListQuery(query);

  const orders = useMemo(() => orderData?.data || [], [orderData]);

  const {
    activeOrders,
    completedOrders,
    deliveredOrders,
    revisionOrders,
    totalActiveOrderPrice,
  } = useMemo(() => {
    const activeOrdersList = orders
      .filter((item) => item?.orderStatus === "in progress")
      .sort(
        (a, b) =>
          new Date(b?.conversation?.lastUpdated) -
          new Date(a?.conversation?.lastUpdated)
      );

    const deliveredOrdersList = orders
      .filter((item) => item?.orderStatus === "delivered")
      .sort(
        (a, b) =>
          new Date(b?.conversation?.lastUpdated) -
          new Date(a?.conversation?.lastUpdated)
      );

    const revisionOrdersList = orders
      .filter((item) => item?.orderStatus === "revision")
      .sort(
        (a, b) =>
          new Date(b?.conversation?.lastUpdated) -
          new Date(a?.conversation?.lastUpdated)
      );

    const completedOrdersList = orders
      .filter((item) => item?.orderStatus === "completed")
      .sort(
        (a, b) =>
          new Date(b?.conversation?.lastUpdated) -
          new Date(a?.conversation?.lastUpdated)
      );

    const activeOrderTotalPrice = activeOrdersList.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );

    return {
      activeOrders: activeOrdersList,
      completedOrders: completedOrdersList,
      deliveredOrders: deliveredOrdersList,
      revisionOrders: revisionOrdersList,
      totalActiveOrderPrice: activeOrderTotalPrice,
    };
  }, [orders]);

  useEffect(() => {
    refetch();
  }, [refetch, orderUnreadMessages.length]);

  return (
    <Box>
      {orders.length > 0 && (
        <Collapse in={open} className={`border ${open && "mb-3"}`}>
          <Alert
            severity="info"
            action={
              <IconButton
                color="inherit"
                size="small"
                onClick={() => setOpen(false)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>Notice</AlertTitle>
            <span className="text-text__gray">
              We’ve received your order! If we need any more information from
              you, we’ll reach out via email. Likewise, if you have any
              questions for us, we’ll let you know through email. And if you
              have any questions, feel free to contact us via email, live chat,
              or Instagram. We’re here to help!
            </span>
          </Alert>
        </Collapse>
      )}

      <Box className="w-full flex flex-col gap-5">
        <Box className="flex flex-col gap-3">
          <Box className="bg-white p-3 border">
            <Typography
              variant="h6"
              className="text-brand__font__size__sm lg:text-brand__font__size__md w-full flex justify-between"
            >
              <span>
                Active Orders :{" "}
                <span className="text-brand__font__size__base font-brand__font__semibold">
                  {activeOrders.length}
                </span>{" "}
              </span>
              <span className="flex items-center gap-1">
                <span>Total:</span>
                <span>
                  <FaDollarSign className="inline text-brand__font__size__sm mb-1" />
                  {totalActiveOrderPrice.toFixed(2)}
                </span>
              </span>
            </Typography>
          </Box>

          <Box
            className={`flex flex-col gap-1 overflow-y-auto custom-scrollbar duration-200 ${
              activeOrders.length > 4 ? "max-h-[365px]" : "h-fit"
            }`}
          >
            {activeOrders.map((order) => (
              <OrderCard
                key={order?.orderId}
                order={order}
                unreadMessages={orderUnreadMessages}
              />
            ))}
          </Box>
        </Box>

        {deliveredOrders.length > 0 && (
          <Box className="flex flex-col gap-4">
            <Box className="flex items-center">
              <Box className="max-w-[140px] w-full">
                <Typography variant="body2">Awaiting response</Typography>
              </Box>
              <Box className="border-t w-full flex-grow"></Box>
            </Box>

            <Box
              className={`flex flex-col gap-1 overflow-y-auto custom-scrollbar ${
                deliveredOrders.length > 4 ? "max-h-[350px]" : "h-fit"
              }`}
            >
              {deliveredOrders.map((order) => (
                <OrderCard
                  key={order?.orderId}
                  order={order}
                  unreadMessages={orderUnreadMessages}
                />
              ))}
            </Box>
          </Box>
        )}

        {revisionOrders.length > 0 && (
          <Box className="flex flex-col gap-4">
            <Box className="flex items-center">
              <Box className="max-w-[80px] w-full">
                <Typography variant="body2">In revision</Typography>
              </Box>
              <Box className="border-t w-full flex-grow"></Box>
            </Box>

            <Box
              className={`flex flex-col gap-1 overflow-y-auto custom-scrollbar ${
                revisionOrders.length > 4 ? "max-h-[350px]" : "h-fit"
              }`}
            >
              {revisionOrders.map((order) => (
                <OrderCard
                  key={order?.orderId}
                  order={order}
                  unreadMessages={orderUnreadMessages}
                />
              ))}
            </Box>
          </Box>
        )}

        {completedOrders.length > 0 && (
          <Box className="flex flex-col gap-4">
            <Box className="flex items-center">
              <Box className="max-w-[80px] w-full">
                <Typography variant="body2">Completed</Typography>
              </Box>
              <Box className="border-t w-full flex-grow"></Box>
            </Box>

            <Box
              className={`flex flex-col gap-1 overflow-y-auto custom-scrollbar ${
                completedOrders.length > 4 ? "max-h-[350px]" : "h-fit"
              }`}
            >
              {completedOrders.map((order) => (
                <OrderCard
                  key={order?.orderId}
                  order={order}
                  unreadMessages={orderUnreadMessages}
                />
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

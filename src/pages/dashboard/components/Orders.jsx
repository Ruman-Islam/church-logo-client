import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import { FaDollarSign } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import { useGetOrderListQuery } from "../../../services/features/order/orderApi";
import startCountdown from "../../../utils/countdown";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

export function OrderCard({ order }) {
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
            order?.package?.thumbnail ||
            getImgUrl("image/gallery/logo-design/church_logo_01.jpg")
          }
          className="w-16 h-14 text-brand__font__size__lg2"
        />
        <Box className="text-brand__font__size__sm leading-tight text-center md:text-start">
          <Typography variant="p">
            {order?.package?.title.length > 36
              ? order?.package?.title.slice(0, 36) + "..."
              : order?.package?.title}
          </Typography>
          <Typography
            variant="p"
            className="block text-text__gray text-brand__font__size__xs mt-1"
          >
            Order ID: {order?.orderId}
          </Typography>
        </Box>
      </Box>
      <Box className="flex-grow flex flex-col md:flex-row items-center justify-between text-text__gray gap-2">
        <Box className="flex-grow flex flex-col md:flex-row gap-y-2 justify-between items-center w-full text-brand__font__size__sm text-center md:text-start">
          <Box>
            <Typography variant="p">Price </Typography>
            <Typography variant="p" className="flex items-center">
              <FaDollarSign />
              <span>{order?.totalPrice}</span>
            </Typography>
          </Box>
          {["in progress", "revision"].includes(order?.orderStatus) && (
            <Box>
              <Typography variant="p" className="block">
                Due In{" "}
              </Typography>
              <Typography variant="p" className="flex items-center gap-x-1">
                <IoMdTime />
                {/* <span>{dateAndTime(order?.deliveryDateUTC)?.date}</span> */}
                <span>{timer}</span>
              </Typography>
            </Box>
          )}
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
        <Box className="basis-[25%] text-center text-primary">
          <HashLink
            to={`/order/order-details/${order?._id}#details`}
            scroll={(el) => scrollWithOffset(el, 135)}
          >
            <Typography variant="p">View</Typography>
          </HashLink>
        </Box>
      </Box>
    </Box>
  );
}

export default function Orders() {
  const [open, setOpen] = useState(true);

  const query = {
    page: 1,
    limit: 100,
  };

  const { data: orderData } = useGetOrderListQuery(query);

  const order = orderData?.data || [];

  const activeOrders = order?.filter(
    (item) => item?.orderStatus === "in progress"
  );

  const totalActiveOrderPrice = activeOrders.reduce(
    (accumulator, currentValue) => accumulator + currentValue?.totalPrice,
    0
  );

  const deliveredOrders = order?.filter(
    (item) => item?.orderStatus === "delivered"
  );

  return (
    <Box className="w-full flex flex-col gap-5">
      <Box
        className={`flex flex-col gap-4 ${
          activeOrders.length > 2 ? "h-fit" : "lg:h-[282px]"
        }`}
      >
        <Collapse in={open} className="border">
          <Alert
            severity="info"
            action={
              <IconButton
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>Notice</AlertTitle>
            Click the close icon to see the Collapse transition in action!
          </Alert>
        </Collapse>

        <Box className="bg-white p-3 border">
          <Typography
            variant="h6"
            className="text-brand__font__size__sm lg:text-brand__font__size__md w-full flex justify-between"
          >
            <span>Active Orders : {activeOrders.length} </span>
            <span className="flex gap-1">
              <span>Total:</span>
              <span>
                <FaDollarSign className="inline text-brand__font__size__xs lg:text-brand__font__size__base" />
                {totalActiveOrderPrice.toFixed(2)}
              </span>
            </span>
          </Typography>
        </Box>

        <Box className="flex flex-col gap-1">
          {activeOrders?.map((order) => (
            <OrderCard key={order?.orderId} order={order} />
          ))}
        </Box>
      </Box>

      {deliveredOrders.length > 0 && (
        <Box className="flex flex-col gap-4">
          <Box className="flex items-center">
            <Box className="max-w-[140px] w-full">
              <Typography variant="p">Awaiting response</Typography>
            </Box>
            <Box className="border-t w-full flex-grow"></Box>
          </Box>

          <Box className="flex flex-col gap-1">
            {deliveredOrders?.map((order) => (
              <OrderCard key={order?.orderId} order={order} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

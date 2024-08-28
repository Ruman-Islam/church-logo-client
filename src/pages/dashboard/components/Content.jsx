import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import { FaDollarSign } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

export function OrderCard({ order }) {
  const scrollWithOffset = useScrollWithOffset();

  return (
    <Box className="bg-white px-3 py-5 md:py-3 border flex flex-col md:flex-row justify-between gap-2">
      <Box className="basis-[100%] md:basis-[40%] items-center justify-center md:justify-start flex flex-col md:flex-row gap-3">
        <Avatar
          variant="square"
          src={getImgUrl(order?.img)}
          className="w-16 h-12 text-brand__font__size__lg2"
        />
        <Box className="text-brand__font__size__sm">
          <Typography variant="p">{order?.packageTitle}</Typography>
          <Typography
            variant="p"
            className="block text-text__gray text-brand__font__size__xs"
          >
            Order ID: {order?.orderId}
          </Typography>
        </Box>
      </Box>
      <Box className="flex-grow flex flex-col md:flex-row items-center justify-between text-text__gray gap-2">
        <Box className="flex-grow flex flex-col md:flex-row gap-y-2 justify-between items-center w-full text-brand__font__size__sm leading-snug">
          <Box>
            <Typography variant="p">Price </Typography>
            <Typography
              variant="p"
              className="font-brand__font__semibold flex items-center"
            >
              <FaDollarSign />
              <span>{order?.price}</span>
            </Typography>
          </Box>
          {["in progress", "revision"].includes(order?.orderStatus) && (
            <Box>
              <Typography variant="p" className="block">
                Due In{" "}
              </Typography>
              <Typography
                variant="p"
                className="font-brand__font__semibold flex items-center gap-x-1"
              >
                <IoMdTime />
                <span>{order?.dueDate}</span>
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
            to="/order/order-activities/123#activities"
            scroll={(el) => scrollWithOffset(el, 135)}
          >
            <Typography variant="p">View</Typography>
          </HashLink>
        </Box>
      </Box>
    </Box>
  );
}

const demoInProgressOrders = [
  {
    img: "image/gallery/logo-design/church_logo_01.jpg",
    packageTitle: "Logo design source pack",
    orderId: "#F0A12GR32GW",
    price: 15,
    dueDate: "4d, 8h",
    orderStatus: "in progress",
  },
  {
    img: "image/gallery/logo-design/church_logo_01.jpg",
    packageTitle: "Logo design source pack",
    orderId: "#F0A12GR32GW",
    price: 15,
    dueDate: "4d, 8h",
    orderStatus: "in progress",
  },
  {
    img: "image/gallery/logo-design/church_logo_01.jpg",
    packageTitle: "Logo design source pack",
    orderId: "#F0A12GR32GW",
    price: 15,
    dueDate: "4d, 8h",
    orderStatus: "in progress",
  },
];

const demoDeliveredOrders = [
  {
    img: "image/gallery/logo-design/church_logo_01.jpg",
    packageTitle: "Logo design source pack",
    orderId: "#F0A12GR32GW",
    price: 15,
    dueDate: "4d, 8h",
    orderStatus: "delivered",
  },
  {
    img: "image/gallery/logo-design/church_logo_01.jpg",
    packageTitle: "Logo design source pack",
    orderId: "#F0A12GR32GW",
    price: 15,
    dueDate: "4d, 8h",
    orderStatus: "delivered",
  },
];

export default function Content() {
  return (
    <Box className="w-full flex flex-col gap-5">
      <Box
        className={`flex flex-col gap-4 ${
          demoInProgressOrders.length > 2 ? "h-fit" : "h-[275px]"
        }`}
      >
        <Box className="bg-white p-3 border">
          <Typography
            variant="h6"
            className="text-brand__font__size__md w-full"
          >
            <span>Active Orders - {demoInProgressOrders.length} </span>
            &#40;
            <FaDollarSign className="inline text-brand__font__size__base" />
            45&#41;
          </Typography>
        </Box>

        <Box className="flex flex-col gap-1">
          {demoInProgressOrders?.map((order) => (
            <OrderCard key={order?.orderId} order={order} />
          ))}
        </Box>
      </Box>

      <Box className="flex flex-col gap-4">
        <Box className="flex items-center">
          <Box className="max-w-[140px] w-full">
            <Typography variant="p">Awaiting response</Typography>
          </Box>
          <Box className="border-t w-full flex-grow"></Box>
        </Box>

        <Box className="flex flex-col gap-1">
          {demoDeliveredOrders?.map((order) => (
            <OrderCard key={order?.orderId} order={order} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

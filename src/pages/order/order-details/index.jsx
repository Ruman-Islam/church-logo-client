import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { FaQuestionCircle } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../../components/common/Layout";
import SectionBanner from "../../../components/common/SectionBanner";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import { useGetOneOrderQuery } from "../../../services/features/order/orderApi";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

const demoOrder = {
  img: "image/gallery/logo-design/church_logo_01.jpg",
  packageTitle: "Logo design source pack",
  orderId: "#F0A12GR32GW",
  price: 15,
  dueDate: "4d, 8h",
  orderStatus: "in progress",
};

export default function OrderDetailScreen() {
  const scrollWithOffset = useScrollWithOffset();
  const { id } = useParams();
  const { data, isLoading } = useGetOneOrderQuery(id);
  const orderInfo = data?.data;

  console.log(orderInfo);

  return (
    <Layout title="Order Detail">
      <Box
        id="details"
        component="section"
        className="bg-section__bg_color h-full"
      >
        <SectionBanner heading="Order Detail" desc="" />
        {!orderInfo ? (
          <Box className="flex justify-center items-center w-full h-full">
            No data found!
          </Box>
        ) : (
          <Box
            component="div"
            className="max-w-[1024px] w-full mx-auto px-4 py-5 lg:py-10"
          >
            {isLoading ? (
              <Box
                component="div"
                className="flex flex-col lg:flex-row-reverse gap-5"
              >
                <Skeleton
                  variant="rectangular"
                  className="lg:max-w-[250px] w-full h-[10vh] lg:h-[50vh]"
                />
                <Skeleton
                  variant="rectangular"
                  className="flex-grow h-[50vh]"
                />
              </Box>
            ) : (
              <Box
                component="div"
                className="flex flex-col lg:flex-row-reverse gap-5"
              >
                <Box className="flex flex-col gap-5 text-brand__black__color">
                  <Box
                    component="div"
                    className="lg:max-w-[250px] w-full border bg-white p-4 flex flex-col gap-5"
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
                            src={getImgUrl(demoOrder?.img)}
                            className="w-[70px] h-12 text-brand__font__size__lg2 rounded"
                          />
                        </Box>
                        <Box className="text-brand__font__size__xs flex flex-col gap-1">
                          <Typography
                            variant="p"
                            className="font-brand__font__semibold leading-tight"
                          >
                            {demoOrder?.packageTitle?.length > 36
                              ? demoOrder?.packageTitle?.slice(0, 36) + "..."
                              : demoOrder?.packageTitle}
                          </Typography>
                          <Box className="capitalize">
                            <Typography
                              variant="p"
                              sx={{
                                padding: "2px 8px",
                                color: "#fff",
                                borderRadius: "10px",
                                backgroundColor:
                                  demoOrder?.orderStatus === "in progress"
                                    ? "#0288D1"
                                    : demoOrder?.orderStatus === "delivered"
                                    ? "#9C27B0"
                                    : demoOrder?.orderStatus === "revision"
                                    ? "#ED6C02"
                                    : "#2E7D32",
                              }}
                            >
                              {demoOrder?.orderStatus}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Box className="text-brand__font__size__sm text-text__gray">
                      <Box className="flex justify-between py-1">
                        <Typography variant="p">Order date</Typography>
                        <Typography
                          variant="p"
                          className="text-brand__font__size__xs font-brand__font__semibold text-brand__black__color"
                        >
                          Mon Aug 26 2024
                        </Typography>
                      </Box>
                      <Box className="flex justify-between py-1">
                        <Typography variant="p">Total price</Typography>
                        <Typography
                          variant="p"
                          className="text-brand__font__size__xs font-brand__font__semibold text-brand__black__color"
                        >
                          $69
                        </Typography>
                      </Box>
                      <Box className="flex justify-between py-1">
                        <Typography variant="p">Order ID</Typography>
                        <Typography
                          variant="p"
                          className="text-brand__font__size__xs font-brand__font__semibold text-brand__black__color"
                        >
                          #F0A12GR32GW
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box className="text-text__gray w-fit">
                    <Box className="border rounded-full bg-section__bg_color flex justify-between items-center">
                      <Box className="px-6 py-1 rounded-full hover:cursor-default">
                        <Typography variant="p"> Switch to</Typography>
                      </Box>
                      <Box className="bg-white rounded-full border-l">
                        <HashLink
                          className="px-6 py-1 inline-block"
                          to="/dashboard#dashboard"
                        >
                          <Typography variant="p">Dashboard</Typography>
                        </HashLink>
                      </Box>
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

                <Box component="div" className="flex-grow flex flex-col gap-5">
                  <ListSubheader className="bg-transparent">
                    <Box className="flex uppercase text-text__gray font-brand__font__semibold gap-6 border-b">
                      <HashLink
                        to={`/order/order-activities/${id}#activities`}
                        scroll={(el) => scrollWithOffset(el, 135)}
                        className="inline-block hover:border-b-2 hover:border-primary"
                      >
                        Activity
                      </HashLink>
                      <HashLink
                        to={`/order/order-details/${id}#details`}
                        scroll={(el) => scrollWithOffset(el, 135)}
                        className="inline-block hover:border-b-2 hover:border-primary border-b-2 border-primary"
                      >
                        Details
                      </HashLink>
                      <HashLink
                        to={`/order/order-requirements/${id}#requirements`}
                        scroll={(el) => scrollWithOffset(el, 135)}
                        className="inline-block hover:border-b-2 hover:border-primary"
                      >
                        Requirements
                      </HashLink>
                    </Box>
                  </ListSubheader>

                  <Box
                    component="div"
                    className="border bg-white max-h-[80vh] h-full p-10 text-brand__black__color"
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
                            {orderInfo?.orderDate}
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
                          $69
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
                          #F0A12GR32GW
                        </span>
                      </Typography>
                    </Box>

                    <Divider className="my-2.5" />

                    <Box>
                      <Typography
                        variant="p"
                        className="text-brand__font__size__sm text-text__gray mb-1 inline-block"
                      >
                        custom offer
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
                            className="text-brand__font__size__sm inline-block basis-[33.33%] text-center"
                          >
                            Qty.
                          </Typography>
                          <Typography
                            variant="p"
                            className="text-brand__font__size__sm inline-block basis-[33.33%] text-end"
                          >
                            Price
                          </Typography>
                        </Box>

                        <Box className="border-b p-3 flex justify-between">
                          <Typography
                            variant="p"
                            className="text-brand__font__size__sm inline-block basis-[33.33%]"
                          >
                            Demo name
                          </Typography>
                          <Typography
                            variant="p"
                            className="text-brand__font__size__sm inline-block basis-[33.33%] text-center"
                          >
                            1
                          </Typography>
                          <Typography
                            variant="p"
                            className="text-brand__font__size__sm inline-block basis-[33.33%] text-end"
                          >
                            $10
                          </Typography>
                        </Box>

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
                            $79
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Layout>
  );
}

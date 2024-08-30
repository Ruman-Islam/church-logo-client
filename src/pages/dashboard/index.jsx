import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import categoryData from "../../data/categories.json";
import useAutomaticScrollWithOffset from "../../hooks/useAutomaticScrollWithOffset";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import { useGetOrderListQuery } from "../../services/features/order/orderApi";
import { useAppSelector } from "../../services/hook";
import { getImgUrl } from "../../utils/getImgUrl-utility";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

const PrevArrow = ({ ...props }) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      className="absolute top-[40%] -left-[6px] text-primary duration-300 hover:cursor-pointer rounded-full flex items-center justify-start z-50 bg-white p-2 border"
    >
      <FaArrowLeft size={18} />
    </Box>
  );
};

const NextArrow = ({ ...props }) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      className="absolute top-[40%] -right-[13px] text-primary duration-300 hover:cursor-pointer rounded-full flex items-center justify-start z-50 bg-white p-2 border"
    >
      <FaArrowRight size={18} />
    </Box>
  );
};

function CategoryCard(props) {
  const scrollWithOffset = useScrollWithOffset();
  const { category, route } = props;
  const { img, title, alt } = category;

  return (
    <HashLink
      className="text-center group relative"
      to={route}
      scroll={(el) => scrollWithOffset(el, 135)}
    >
      <Box>
        <Box className="overflow-hidden md:max-w-[355px] w-full">
          <img
            className="group-hover:scale-125 duration-500 w-full h-full"
            src={getImgUrl(img)}
            alt={alt}
          />
        </Box>
        <Box className="py-2 bg-white w-full text-text__gray font-brand__font__semibold group-hover:text-primary duration-300 border text-brand__font__size__sm md:text-brand__font__size__base">
          <p>{title}</p>
        </Box>
      </Box>
    </HashLink>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  draggable: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function DashboardScreen() {
  useAutomaticScrollWithOffset();

  const {
    auth: { user },
  } = useAppSelector((state) => state);

  const [query] = useState({
    page: 1,
    limit: 100,
  });

  const { data, isFetching } = useGetOrderListQuery(query);

  return (
    <Layout title="Dashboard">
      <Box id="dashboard" className="bg-section__bg_color h-full">
        <SectionBanner heading="Welcome" desc="" />
        <Box className="max-w-[1024px] w-full mx-auto px-4 py-5 lg:py-10">
          {isFetching ? (
            <Box className="flex flex-col lg:flex-row gap-5">
              <Skeleton
                variant="rectangular"
                className="lg:max-w-[250px] w-full h-[10vh] lg:h-[60vh]"
              />
              <Skeleton variant="rectangular" className="flex-grow h-[60vh]" />
            </Box>
          ) : (
            <Box className="flex flex-col lg:flex-row gap-5">
              <Sidebar user={user} data={data?.data} />
              <Content data={data?.data} />
            </Box>
          )}

          <Box className="w-full p-2">
            <Box className="flex flex-col gap-4 py-5">
              <Box className="flex items-center">
                <Box className="max-w-[165px] w-full">
                  <Typography variant="p">Upgrade your business</Typography>
                </Box>
                <Box className="border-t w-full flex-grow"></Box>
              </Box>
            </Box>
            <Slider {...settings}>
              {categoryData.map((d) => (
                <CategoryCard key={d.id} route={d.route} category={d} />
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
